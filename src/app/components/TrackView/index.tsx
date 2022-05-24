import React from 'react';
import { useSelector } from 'react-redux';
import { selectClipIds } from '../../stores/GlobalClips/slice/selectors';
import { ClipView } from '../ClipView';

export function TrackView() {
  const clips = useSelector(selectClipIds);

  return (
    <div className="w-full h-36 bg-black text-white">
      {clips.map(clipId => (
        <ClipView uuid={clipId} key={clipId} />
      ))}
    </div>
  );
}
