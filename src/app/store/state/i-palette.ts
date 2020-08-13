import { IGeneral } from './i-general';
import { IPaint } from './i-paint';

export interface IPalette {
  changeId: string;
  general: IGeneral;
  additionalPaint: IPaint[];
}
