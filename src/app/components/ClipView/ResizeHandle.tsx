import React, { useMemo } from 'react';
import { Clip, CLIP_A_ID } from '../../types/Clip';
import { useSpring, animated } from 'react-spring';
import { useGesture } from '@use-gesture/react';
import { useDispatch } from 'react-redux';
import { clipsActions } from '../../stores/GlobalClips/slice';

export enum ResizeDir {
  Left,
}

interface Props {
  clip: Clip;
  dir: ResizeDir;
}

export function ResizeHandle({ clip }: Props) {
  const dispatch = useDispatch();
  const handleStyle = useMemo(() => {
    return {
      width: clip.uuid === CLIP_A_ID ? 0 : 10,
      immediate: true,
      height: clip.uuid === CLIP_A_ID ? 0 : clip.styles.height,
    };
  }, [clip.styles.height, clip.uuid]);
  const styles = useSpring(handleStyle);

  const bind = useGesture({
    onDrag: ({ delta: [dx], active, dragging, down }) => {
      console.log({ active, dragging, down });
      const x = clip.styles.x + dx;
      dispatch(clipsActions.resizeClip({ uuid: clip.uuid, coordinateX: x }));
    },
  });

  return (
    <animated.div
      {...bind()}
      style={styles}
      className="absolute bg-orange-300 cursor-pointer select-none touch-none overflow-hidden"
    >
      |
    </animated.div>
  );
}
