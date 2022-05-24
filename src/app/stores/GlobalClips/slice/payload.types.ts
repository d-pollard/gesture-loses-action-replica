import { Clip } from '../../../types/Clip';

export interface SimpleResizePayload {
  uuid: Clip['uuid'];
  coordinateX: number;
}
