import { Theme } from './theme';
import { Paint } from './paint';

export interface Palette {
  theme: Theme;
  additionalPaint: Paint[];
  toJson?(): Palette;
}
