import { v4 as uuidv4 } from 'uuid';

import { PaletteState } from './palette-state';

export interface AppState {
  palette: PaletteState;
}

export const INITIAL_STATE: AppState = {
  palette: new PaletteState({
    theme: {
      name: 'My Theme',
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
      warn: {
        id: uuidv4(),
        name: 'Warn',
        background: {
          r: 244,
          g: 67,
          b: 54,
          a: 1.0,
        },
        text: {
          r: 255,
          g: 255,
          b: 255,
          a: 1.0,
        },
      },
    },
    additionalPaint: [{
      id: uuidv4(),
      name: 'Red',
      background: {
        r: 244,
        g: 67,
        b: 54,
        a: 1.0,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Pink',
      background: {
        r: 233,
        g: 30,
        b: 99,
        a: 1.0,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Purple',
      background: {
        r: 156,
        g: 39,
        b: 176,
        a: 1.0,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Deep Purple',
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
    }, {
      id: uuidv4(),
      name: 'Indigo',
      background: {
        r: 63,
        g: 81,
        b: 181,
        a: 1.0,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Blue',
      background: {
        r: 33,
        g: 150,
        b: 243,
        a: 1.0,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Light Blue',
      background: {
        r: 3,
        g: 169,
        b: 244,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Cyan',
      background: {
        r: 0,
        g: 188,
        b: 212,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Teal',
      background: {
        r: 0,
        g: 150,
        b: 136,
        a: 1.0,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Green',
      background: {
        r: 76,
        g: 175,
        b: 80,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Light Green',
      background: {
        r: 139,
        g: 195,
        b: 74,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Lime',
      background: {
        r: 205,
        g: 220,
        b: 57,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Yellow',
      background: {
        r: 255,
        g: 235,
        b: 59,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Amber',
      background: {
        r: 255,
        g: 193,
        b: 7,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Orange',
      background: {
        r: 255,
        g: 152,
        b: 0,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Deep Orange',
      background: {
        r: 255,
        g: 87,
        b: 34,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Brown',
      background: {
        r: 121,
        g: 85,
        b: 72,
        a: 1.0,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Gray',
      background: {
        r: 158,
        g: 158,
        b: 158,
        a: 1.0,
      },
      text: {
        r: 0,
        g: 0,
        b: 0,
        a: 1.0,
      },
    }, {
      id: uuidv4(),
      name: 'Blue Gray',
      background: {
        r: 96,
        g: 125,
        b: 139,
        a: 1.0,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
      },
    }, ],
  }),
};
