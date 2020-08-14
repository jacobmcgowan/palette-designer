import { Color as FormColor } from '@angular-material-components/color-picker';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { ColorConverterService } from '../../color-converter.service';
import { IGeneralForm } from './i-general-form';
import { IUpdateGeneralAction, IPalette, IAppState, General, ActionType, IColor, Paint, Color } from '../../../store';

@Component({
  selector: 'app-palette-design-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _colorConverterService: ColorConverterService,
  ) {
  }

  @select() palette$: Observable<IPalette>;
  form: FormGroup;

  ngOnInit(): void {
    this.palette$
      .subscribe(palette => this._updateForm(palette));
  }

  private _updateForm(palette: IPalette): void {
    const newBackground = palette.general.background.background;
    const newTextOnBackground = palette.general.background.text;
    const newSurface = palette.general.surface.background;
    const newPrimary = palette.general.primary.background;
    const newTextOnPrimary = palette.general.primary.text;
    const newSecondary = palette.general.secondary.background;
    const newTextOnSecondary = palette.general.secondary.text;

    if (!this.form) {
      this.form = new FormGroup({
        background: new FormControl(
          this._colorConverterService.paletteToForm(newBackground)
        ),
        textOnBackground: new FormControl(
          this._colorConverterService.paletteToForm(newTextOnBackground)
        ),
        surface: new FormControl(
          this._colorConverterService.paletteToForm(newSurface)
        ),
        primary: new FormControl(
          this._colorConverterService.paletteToForm(newPrimary)
        ),
        textOnPrimary: new FormControl(
          this._colorConverterService.paletteToForm(newTextOnPrimary)
        ),
        secondary: new FormControl(
          this._colorConverterService.paletteToForm(newSecondary)
        ),
        textOnSecondary: new FormControl(
          this._colorConverterService.paletteToForm(newTextOnSecondary)
        ),
      });

      this.form.valueChanges
        .subscribe(value => this._update(value));
    } else {
      const background = this.form.get('background');
      const textOnBackground = this.form.get('textOnBackground');
      const surface = this.form.get('surface');
      const primary = this.form.get('primary');
      const textOnPrimary = this.form.get('textOnPrimary');
      const secondary = this.form.get('secondary');
      const textOnSecondary = this.form.get('textOnSecondary');

      if (!this._colorConverterService.matches(newBackground, background.value)) {
        background.setValue(
          this._colorConverterService.paletteToForm(newBackground)
        );
      }

      if (!this._colorConverterService.matches(newTextOnBackground, textOnBackground.value)) {
        background.setValue(
          this._colorConverterService.paletteToForm(newTextOnBackground)
        );
      }

      if (!this._colorConverterService.matches(newSurface, surface.value)) {
        background.setValue(
          this._colorConverterService.paletteToForm(newSurface)
        );
      }

      if (!this._colorConverterService.matches(newPrimary, primary.value)) {
        background.setValue(
          this._colorConverterService.paletteToForm(newPrimary)
        );
      }

      if (!this._colorConverterService.matches(newTextOnPrimary, textOnPrimary.value)) {
        background.setValue(
          this._colorConverterService.paletteToForm(newTextOnPrimary)
        );
      }

      if (!this._colorConverterService.matches(newSecondary, secondary.value)) {
        background.setValue(
          this._colorConverterService.paletteToForm(newSecondary)
        );
      }

      if (!this._colorConverterService.matches(newTextOnSecondary, textOnSecondary.value)) {
        background.setValue(
          this._colorConverterService.paletteToForm(newTextOnSecondary)
        );
      }
    }
  }

  private _update(value: IGeneralForm): void {
    this._ngRedux.dispatch<IUpdateGeneralAction>({
      type: ActionType.UpdateGeneral,
      general: {
        background: {
          name: 'Background',
          background: value.background,
          text: value.textOnBackground,
        },
        surface: {
          name: 'Surface',
          background: value.surface,
          text: value.textOnBackground,
        },
        primary: {
          name: 'Primary',
          background: value.primary,
          text: value.textOnPrimary,
        },
        secondary: {
          name: 'Secondary',
          background: value.secondary,
          text: value.textOnSecondary,
        }
      }
    });
  }
}
