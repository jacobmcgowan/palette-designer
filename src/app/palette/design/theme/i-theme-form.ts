import { Color } from '@angular-material-components/color-picker';

export interface IThemeForm {
  name: string;
  background: Color;
  textOnBackground: Color;
  surface: Color;
  primary: Color;
  textOnPrimary: Color;
  secondary: Color;
  textOnSecondary: Color;
  warn: Color;
  textOnWarn: Color;
}
