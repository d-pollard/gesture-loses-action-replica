import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
import { clipsAdapter } from './adapters';
import { Clip } from '../../../types/Clip';

const clipsAdapterSelectors = clipsAdapter.getSelectors();

const selectSlice = (state: RootState) => state.clips || initialState;

export const selectClips = createSelector([selectSlice], state => state);

export const selectClipsEntity = createSelector(
  [selectClips],
  state => state.clips,
);

export const selectClipIds = createSelector(
  [selectClipsEntity],
  state => clipsAdapterSelectors.selectIds(state) as Clip['uuid'][],
);

export const selectClipsMap = createSelector([selectClipsEntity], state =>
  clipsAdapterSelectors.selectEntities(state),
);
