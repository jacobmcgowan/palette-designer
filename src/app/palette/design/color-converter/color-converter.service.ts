import { Injectable } from '@angular/core';
import { Color as FormColor } from '@angular-material-components/color-picker';

import { Color, IColor } from '../../../store';
import { AbstractControl } from '@angular/forms';

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

  setForm(control: AbstractControl, color: IColor) {
    if (!this.matches(color, control.value)) {
      control.setValue(this.paletteToForm(color), { emitEvent: false });
    }
  }
}
