import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { ColorConverterService } from '../color-converter/color-converter.service';
import { IGeneralForm } from './i-general-form';
import { IUpdateGeneralAction, IPalette, IAppState, ActionType } from '../../../store';

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
  private _backgroundId: string;
  private _surfaceId: string;
  private _primaryId: string;
  private _secondaryId: string;
  private _warnId: string;

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
    const newWarn = palette.general.warn.background;
    const newTextOnWarn = palette.general.warn.text;

    this._backgroundId = palette.general.background.id;
    this._surfaceId = palette.general.surface.id;
    this._primaryId = palette.general.primary.id;
    this._secondaryId = palette.general.secondary.id;
    this._warnId = palette.general.warn.id;

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
        warn: new FormControl(
          this._colorConverterService.paletteToForm(newWarn)
        ),
        textOnWarn: new FormControl(
          this._colorConverterService.paletteToForm(newTextOnWarn)
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
      const warn = this.form.get('warn');
      const textOnWarn = this.form.get('textOnWarn');

      if (!this._colorConverterService.matches(newBackground, background.value)) {
        background.setValue(
          this._colorConverterService.paletteToForm(newBackground)
        );
      }

      if (!this._colorConverterService.matches(newTextOnBackground, textOnBackground.value)) {
        textOnBackground.setValue(
          this._colorConverterService.paletteToForm(newTextOnBackground),
          { emitEvent: false }
        );
      }

      if (!this._colorConverterService.matches(newSurface, surface.value)) {
        surface.setValue(
          this._colorConverterService.paletteToForm(newSurface),
          { emitEvent: false }
        );
      }

      if (!this._colorConverterService.matches(newPrimary, primary.value)) {
        primary.setValue(
          this._colorConverterService.paletteToForm(newPrimary),
          { emitEvent: false }
        );
      }

      if (!this._colorConverterService.matches(newTextOnPrimary, textOnPrimary.value)) {
        textOnPrimary.setValue(
          this._colorConverterService.paletteToForm(newTextOnPrimary),
          { emitEvent: false }
        );
      }

      if (!this._colorConverterService.matches(newSecondary, secondary.value)) {
        secondary.setValue(
          this._colorConverterService.paletteToForm(newSecondary),
          { emitEvent: false }
        );
      }

      if (!this._colorConverterService.matches(newTextOnSecondary, textOnSecondary.value)) {
        textOnSecondary.setValue(
          this._colorConverterService.paletteToForm(newTextOnSecondary),
          { emitEvent: false }
        );
      }

      if (!this._colorConverterService.matches(newWarn, warn.value)) {
        warn.setValue(
          this._colorConverterService.paletteToForm(newWarn),
          { emitEvent: false }
        );
      }

      if (!this._colorConverterService.matches(newTextOnWarn, textOnWarn.value)) {
        textOnWarn.setValue(
          this._colorConverterService.paletteToForm(newTextOnWarn),
          { emitEvent: false }
        );
      }
    }
  }

  private _update(value: IGeneralForm): void {
    this._ngRedux.dispatch<IUpdateGeneralAction>({
      type: ActionType.UpdateGeneral,
      general: {
        background: {
          id: this._backgroundId,
          name: 'Background',
          background: value.background,
          text: value.textOnBackground,
        },
        surface: {
          id: this._surfaceId,
          name: 'Surface',
          background: value.surface,
          text: value.textOnBackground,
        },
        primary: {
          id: this._primaryId,
          name: 'Primary',
          background: value.primary,
          text: value.textOnPrimary,
        },
        secondary: {
          id: this._secondaryId,
          name: 'Secondary',
          background: value.secondary,
          text: value.textOnSecondary,
        },
        warn: {
          id: this._warnId,
          name: 'Warn',
          background: value.warn,
          text: value.textOnWarn,
        },
      },
    });
  }
}
