import { Paint } from './paint';

export interface Theme {
  name: string;
  background: Paint;
  surface: Paint;
  primary: Paint;
  secondary: Paint;
  warn: Paint;
  toJson?(): Theme;
}
