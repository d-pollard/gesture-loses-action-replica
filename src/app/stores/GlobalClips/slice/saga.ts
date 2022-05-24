import { takeLatest, put, select } from 'redux-saga/effects';
import { clipsActions as actions } from '.';
import { SagaLoad } from '../../../types/SagaLoad';
import { SimpleResizePayload } from './payload.types';
import { Clip, CLIP_A_ID } from '../../../types/Clip';
import { selectClipsMap } from './selectors';

function* simpleClipResize({ payload }: SagaLoad<SimpleResizePayload>) {
  const { coordinateX, uuid } = payload;

  if (uuid === CLIP_A_ID) {
    return;
  }

  const style: Clip['styles'] = (yield select(selectClipsMap))[uuid].styles;

  const normalizeX = Math.max(0, coordinateX);
  const changeX = style.x - coordinateX;
  const width = style.width + changeX;

  yield put(
    actions.updateClips([
      {
        id: uuid,
        changes: {
          styles: { ...style, x: normalizeX, width },
        },
      },
    ]),
  );
}

export function* clipsSaga() {
  yield takeLatest(actions.resizeClip.type, simpleClipResize);
}
