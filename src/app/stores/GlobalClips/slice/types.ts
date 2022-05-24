/* --- STATE --- */
import { clipsAdapter } from './adapters';

export interface ClipsState {
  clips: ReturnType<typeof clipsAdapter.getInitialState>;
}
