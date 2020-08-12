import { IPalette } from './i-palette';

export interface IAppState {
  palette: IPalette;
}

export const INITIAL_STATE: IAppState = {
  palette: {
    general: {
      background: {
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
        background: {
          r: 117,
          g: 117,
          b: 117,
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
  },
};
