import { ITheme } from './i-theme';
import { IPaint } from './i-paint';

export interface IPalette {
  theme: ITheme;
  additionalPaint: IPaint[];
  toJson?(): IPalette;
}
