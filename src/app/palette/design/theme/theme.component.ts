import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { ColorConverterService } from '../color-converter/color-converter.service';
import { IThemeForm } from './i-theme-form';
import { IUpdateThemeAction, IPalette, AppState, ActionType, IColor } from '../../../store';
import { invalidColorValidator } from '../invalid-color-validator';

@Component({
  selector: 'app-palette-design-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  constructor(
    private _ngRedux: NgRedux<AppState>,
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

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get background(): AbstractControl {
    return this.form.get('background');
  }

  get textOnBackground(): AbstractControl {
    return this.form.get('textOnBackground');
  }

  get surface(): AbstractControl {
    return this.form.get('surface');
  }

  get primary(): AbstractControl {
    return this.form.get('primary');
  }

  get textOnPrimary(): AbstractControl {
    return this.form.get('textOnPrimary');
  }

  get secondary(): AbstractControl {
    return this.form.get('secondary');
  }

  get textOnSecondary(): AbstractControl {
    return this.form.get('textOnSecondary');
  }

  get warn(): AbstractControl {
    return this.form.get('warn');
  }

  get textOnWarn(): AbstractControl {
    return this.form.get('textOnWarn');
  }

  ngOnInit(): void {
    this.palette$
      .subscribe(palette => this._updateForm(palette));
  }

  private _updateForm(palette: IPalette): void {
    const newName = palette.theme.name;
    const newBackground = palette.theme.background.background;
    const newTextOnBackground = palette.theme.background.text;
    const newSurface = palette.theme.surface.background;
    const newPrimary = palette.theme.primary.background;
    const newTextOnPrimary = palette.theme.primary.text;
    const newSecondary = palette.theme.secondary.background;
    const newTextOnSecondary = palette.theme.secondary.text;
    const newWarn = palette.theme.warn.background;
    const newTextOnWarn = palette.theme.warn.text;

    this._backgroundId = palette.theme.background.id;
    this._surfaceId = palette.theme.surface.id;
    this._primaryId = palette.theme.primary.id;
    this._secondaryId = palette.theme.secondary.id;
    this._warnId = palette.theme.warn.id;

    if (!this.form) {
      this.form = new FormGroup({
        name: new FormControl(newName, [
          Validators.required
        ]),
        background: new FormControl(
          this._colorConverterService.paletteToForm(newBackground),
          [
            invalidColorValidator
          ]
        ),
        textOnBackground: new FormControl(
          this._colorConverterService.paletteToForm(newTextOnBackground),
          [
            invalidColorValidator
          ]
        ),
        surface: new FormControl(
          this._colorConverterService.paletteToForm(newSurface),
          [
            invalidColorValidator
          ]
        ),
        primary: new FormControl(
          this._colorConverterService.paletteToForm(newPrimary),
          [
            invalidColorValidator
          ]
        ),
        textOnPrimary: new FormControl(
          this._colorConverterService.paletteToForm(newTextOnPrimary),
          [
            invalidColorValidator
          ]
        ),
        secondary: new FormControl(
          this._colorConverterService.paletteToForm(newSecondary),
          [
            invalidColorValidator
          ]
        ),
        textOnSecondary: new FormControl(
          this._colorConverterService.paletteToForm(newTextOnSecondary),
          [
            invalidColorValidator
          ]
        ),
        warn: new FormControl(
          this._colorConverterService.paletteToForm(newWarn),
          [
            invalidColorValidator
          ]
        ),
        textOnWarn: new FormControl(
          this._colorConverterService.paletteToForm(newTextOnWarn),
          [
            invalidColorValidator
          ]
        ),
      });

      this.form.valueChanges
        .subscribe(value => {
          if (this.form.valid) {
            this._update(value);
          }
        });
    } else {
      if (newName !== this.name.value) {
        this.name.setValue(newName, { emitEvent: false });
      }

      this._colorConverterService.setForm(this.background, newBackground);
      this._colorConverterService.setForm(this.textOnBackground, newTextOnBackground);
      this._colorConverterService.setForm(this.surface, newSurface);
      this._colorConverterService.setForm(this.primary, newPrimary);
      this._colorConverterService.setForm(this.textOnPrimary, newTextOnPrimary);
      this._colorConverterService.setForm(this.secondary, newSecondary);
      this._colorConverterService.setForm(this.textOnSecondary, newTextOnSecondary);
      this._colorConverterService.setForm(this.warn, newWarn);
      this._colorConverterService.setForm(this.textOnWarn, newTextOnWarn);
    }
  }

  private _update(value: IThemeForm): void {
    this._ngRedux.dispatch<IUpdateThemeAction>({
      type: ActionType.UpdateTheme,
      theme: {
        name: value.name,
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
