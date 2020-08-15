import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { ColorConverterService } from '../color-converter/color-converter.service';
import { IThemeForm } from './i-theme-form';
import { IUpdateThemeAction, IPalette, IAppState, ActionType, IColor } from '../../../store';

@Component({
  selector: 'app-palette-design-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
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
        name: new FormControl(newName),
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
      const name = this.form.get('name');

      if (newName !== name.value) {
        name.setValue(newName, { emitEvent: false });
      }

      this._colorConverterService.setForm(this.form.get('background'), newBackground);
      this._colorConverterService.setForm(this.form.get('textOnBackground'), newTextOnBackground);
      this._colorConverterService.setForm(this.form.get('surface'), newSurface);
      this._colorConverterService.setForm(this.form.get('primary'), newPrimary);
      this._colorConverterService.setForm(this.form.get('textOnPrimary'), newTextOnPrimary);
      this._colorConverterService.setForm(this.form.get('secondary'), newSecondary);
      this._colorConverterService.setForm(this.form.get('textOnSecondary'), newTextOnSecondary);
      this._colorConverterService.setForm(this.form.get('warn'), newWarn);
      this._colorConverterService.setForm(this.form.get('textOnWarn'), newTextOnWarn);
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
