import { clipsActions, useClipsSlice } from './slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getClips } from '../../types/Clip';

export function GlobalClips() {
  useClipsSlice();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clipsActions.loadClips(getClips()));
  }, [dispatch]);

  return null;
}
