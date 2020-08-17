import { ThemeState } from './theme-state';
import { Palette } from './palette';
import { PaintState } from './paint-state';

export class PaletteState implements Palette {
  constructor(other?: Palette) {
    if (other) {
      this.theme = new ThemeState(other.theme);
      this.additionalPaint = other.additionalPaint ?
        other.additionalPaint
          .map(paint => new PaintState(paint)) :
        [];
    } else {
      this.additionalPaint = [];
    }
  }

  theme: ThemeState;
  additionalPaint: PaintState[];

  toJson(): Palette {
    return {
      theme: this.theme.toJson ?
        this.theme.toJson() :
        this.theme,
      additionalPaint: this.additionalPaint ?
        this.additionalPaint
          .map(paint => paint.toJson ? paint.toJson() : paint) :
        this.additionalPaint,
    };
  }
}
