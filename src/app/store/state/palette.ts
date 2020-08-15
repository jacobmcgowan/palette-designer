import { General } from './general';
import { IGeneral } from './i-general';
import { IPaint } from './i-paint';
import { IPalette } from './i-palette';
import { Paint } from './paint';

export class Palette implements IPalette {
  constructor(other?: IPalette) {
    if (other) {
      this.general = new General(other.general);
      this.additionalPaint = other.additionalPaint ?
        other.additionalPaint
          .map(paint => new Paint(paint)) :
        [];
    } else {
      this.additionalPaint = [];
    }
  }

  general: IGeneral;
  additionalPaint: IPaint[];

  toJson(): IPalette {
    return {
      general: this.general.toJson ?
        this.general.toJson() :
        this.general,
      additionalPaint: this.additionalPaint ?
        this.additionalPaint
          .map(paint => paint.toJson ? paint.toJson() : paint) :
        this.additionalPaint,
    };
  }
}
