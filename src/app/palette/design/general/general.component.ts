import { Color as FormColor } from '@angular-material-components/color-picker';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { IGeneralForm } from './i-general-form';
import { IUpdateGeneralAction, IPalette, IAppState, General, ActionType, IColor, Paint, Color } from '../../../store';

@Component({
  selector: 'app-palette-design-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  constructor(private _ngRedux: NgRedux<IAppState>) {
  }

  @select() palette$: Observable<IPalette>;

  form: FormGroup;

  private _changeId: string;

  ngOnInit(): void {
    this.palette$
      .subscribe(palette => this._updateForm(palette));
  }

  private _updateForm(palette: IPalette): void {
    if (!this.form) {
      this._changeId = palette.changeId;

      this.form = new FormGroup({
        background: new FormControl(
          this._paletteColorToFormColor(palette.general.background.background)
        ),
        textOnBackground: new FormControl(
          this._paletteColorToFormColor(palette.general.background.text)
        ),
        surface: new FormControl(
          this._paletteColorToFormColor(palette.general.surface.background)
        ),
        primary: new FormControl(
          this._paletteColorToFormColor(palette.general.primary.background)
        ),
        textOnPrimary: new FormControl(
          this._paletteColorToFormColor(palette.general.primary.text)
        ),
        secondary: new FormControl(
          this._paletteColorToFormColor(palette.general.secondary.background)
        ),
        textOnSecondary: new FormControl(
          this._paletteColorToFormColor(palette.general.secondary.text)
        ),
      });

      this.form.valueChanges
        .subscribe(value => this._onChange(value));
    } else if (this._changeId !== palette.changeId) {
      this._changeId = palette.changeId;

      this.form.get('background').setValue(
        this._paletteColorToFormColor(palette.general.background.background)
      );
      this.form.get('textOnBackground').setValue(
        this._paletteColorToFormColor(palette.general.background.text)
      );
      this.form.get('surface').setValue(
        this._paletteColorToFormColor(palette.general.surface.background)
      );
      this.form.get('primary').setValue(
        this._paletteColorToFormColor(palette.general.primary.background)
      );
      this.form.get('textOnPrimary').setValue(
        this._paletteColorToFormColor(palette.general.primary.text)
      );
      this.form.get('secondary').setValue(
        this._paletteColorToFormColor(palette.general.secondary.background)
      );
      this.form.get('textOnSecondary').setValue(
        this._paletteColorToFormColor(palette.general.secondary.text)
      );
    }
  }

  private _paletteColorToFormColor(color: IColor): FormColor {
    return new FormColor(
      color.r,
      color.g,
      color.b,
      color.a
    );
  }

  private _onChange(value: IGeneralForm): void {
    this._changeId = uuidv4();
    this._ngRedux.dispatch<IUpdateGeneralAction>({
      type: ActionType.UpdateGeneral,
      changeId: this._changeId,
      general: new General({
        background: new Paint({
          background: new Color(value.background),
          text: new Color(value.textOnBackground),
        }),
        surface: new Paint({
          background: new Color(value.surface),
          text: new Color(value.textOnBackground),
        }),
        primary: new Paint({
          background: new Color(value.primary),
          text: new Color(value.textOnPrimary),
        }),
        secondary: new Paint({
          background: new Color(value.secondary),
          text: new Color(value.textOnSecondary),
        })
      })
    });
  }
}
