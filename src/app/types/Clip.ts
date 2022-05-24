export interface Clip {
  styles: {
    x: number;
    y: number;
    width: number;
    height: number;
    immediate: boolean;
  };
  text: string;
  uuid: string;
}

export const CLIP_A_ID = '1a';
export const CLIP_B_ID = '1b';

export function getClips(): Clip[] {
  const clips: Clip[] = [];
  const defaultHeight = 30;
  const defaultY = 20;

  clips.push({
    uuid: CLIP_A_ID,
    styles: {
      height: defaultHeight,
      y: defaultY,
      x: 10,
      width: 40,
      immediate: false,
    },
    text: 'This is some text',
  });

  clips.push({
    uuid: CLIP_B_ID,
    styles: {
      height: defaultHeight,
      y: defaultY,
      x: 60,
      width: 40,
      immediate: true,
    },
    text: 'This is some text',
  });

  return clips;
}
