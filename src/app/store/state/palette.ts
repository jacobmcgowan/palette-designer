import { Theme } from './theme';
import { ITheme } from './i-theme';
import { IPaint } from './i-paint';
import { IPalette } from './i-palette';
import { Paint } from './paint';

export class Palette implements IPalette {
  constructor(other?: IPalette) {
    if (other) {
      this.theme = new Theme(other.theme);
      this.additionalPaint = other.additionalPaint ?
        other.additionalPaint
          .map(paint => new Paint(paint)) :
        [];
    } else {
      this.additionalPaint = [];
    }
  }

  theme: ITheme;
  additionalPaint: IPaint[];

  toJson(): IPalette {
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
