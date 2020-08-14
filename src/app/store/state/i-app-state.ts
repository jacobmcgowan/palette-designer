import { v4 as uuidv4 } from 'uuid';

import { IPalette } from './i-palette';
import { Palette } from './palette';

export interface IAppState {
  palette: IPalette;
}

export const INITIAL_STATE: IAppState = {
  palette: new Palette({
    general: {
      background: {
        id: uuidv4(),
        name: 'Background',
        background: {
          r: 250,
          g: 250,
          b: 250,
          a: 1.0,
        },
        text: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.87,
        },
      },
      surface: {
        id: uuidv4(),
        name: 'Surface',
        background: {
          r: 255,
          g: 255,
          b: 255,
          a: 1.0,
        },
        text: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.87,
        },
      },
      primary: {
        id: uuidv4(),
        name: 'Primary',
        background: {
          r: 103,
          g: 58,
          b: 183,
          a: 1.0,
        },
        text: {
          r: 255,
          g: 255,
          b: 255,
          a: 1.0,
        },
      },
      secondary: {
        id: uuidv4(),
        name: 'Secondary',
        background: {
          r: 255,
          g: 215,
          b: 64,
          a: 1.0,
        },
        text: {
          r: 0,
          g: 0,
          b: 0,
          a: 1.0,
        },
      },
    },
    additionalPaint: [],
  }),
};
