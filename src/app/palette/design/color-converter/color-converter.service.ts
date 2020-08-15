import { Injectable } from '@angular/core';
import { Color as FormColor } from '@angular-material-components/color-picker';

import { Color, IColor } from '../../../store';

@Injectable({
  providedIn: 'root'
})
export class ColorConverterService {
  paletteToForm(color: IColor): FormColor {
    return new FormColor(
      color.r,
      color.g,
      color.b,
      color.a,
    );
  }

  formToPalette(color: FormColor): IColor {
    return new Color(color as IColor);
  }

  matches(color: IColor, formColor: FormColor): boolean {
    return color.r === formColor.r &&
      color.g === formColor.g &&
      color.b === formColor.b &&
      color.a === formColor.a;
  }
}
