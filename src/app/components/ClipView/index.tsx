import React from 'react';
import { Clip } from '../../types/Clip';
import { useSelector } from 'react-redux';
import { selectClipsMap } from '../../stores/GlobalClips/slice/selectors';
import { animated, useSpring } from 'react-spring';
import { ResizeDir, ResizeHandle } from './ResizeHandle';

interface Props {
  uuid: Clip['uuid'];
}

export function ClipView({ uuid }: Props) {
  const clip = useSelector(state => selectClipsMap(state)[uuid]!);

  const styles = useSpring(clip.styles);
  return (
    <animated.div
      style={styles}
      className="absolute text-sm bg-purple-800 truncate"
    >
      <ResizeHandle clip={clip} dir={ResizeDir.Left} />
    </animated.div>
  );
}
