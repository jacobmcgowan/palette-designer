import { IGeneral } from './i-general';
import { IPaint } from './i-paint';

export interface IPalette {
  general: IGeneral;
  additionalPaint: IPaint[];
  toJson?(): IPalette;
}
