import { createEntityAdapter } from '@reduxjs/toolkit';
import { Clip } from '../../../types/Clip';

export const clipsAdapter = createEntityAdapter<Clip>({
  selectId: c => c.uuid,
  sortComparer: (clipA, clipB) => clipA.styles.x - clipB.styles.x,
});
