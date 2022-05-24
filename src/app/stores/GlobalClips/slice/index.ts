import { DeepPartial, PayloadAction, Update } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { clipsSaga } from './saga';
import { ClipsState } from './types';
import { clipsAdapter } from './adapters';
import { Clip } from '../../../types/Clip';
import { SimpleResizePayload } from './payload.types';

export const initialState: ClipsState = {
  clips: clipsAdapter.getInitialState(),
};

const slice = createSlice({
  name: 'clips',
  initialState,
  reducers: {
    loadClips(state, action: PayloadAction<Clip[]>) {
      clipsAdapter.addMany(state.clips, action.payload);
    },
    resizeClip(_, __: PayloadAction<SimpleResizePayload>) {},
    updateClips(state, action: PayloadAction<Update<Clip>[]>) {
      clipsAdapter.updateMany(state.clips, action.payload);
    },
  },
});

export const { actions: clipsActions } = slice;

export const useClipsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: clipsSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useClipsSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
