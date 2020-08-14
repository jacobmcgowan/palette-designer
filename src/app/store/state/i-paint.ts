import { IColor } from './i-color';

export interface IPaint {
  id: string;
  name: string;
  background: IColor;
  text: IColor;
}
