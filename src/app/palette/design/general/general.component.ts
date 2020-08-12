import { Color } from '@angular-material-components/color-picker';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IGeneralForm } from './i-general-form';
import { IUpdateGeneralAction, IPalette, IAppState, General, ActionType } from '../../../store';

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

  ngOnInit(): void {
    this.palette$
      .subscribe(palette => {
        this.form = new FormGroup({
          background: new FormControl(new Color(
            palette.general.background.background.r,
            palette.general.background.background.g,
            palette.general.background.background.b,
            palette.general.background.background.a,
          ))
        });

        this.form.valueChanges
          .subscribe(value => this._onChange(value));
      });
  }

  private _onChange(value: IGeneralForm): void {
    this._ngRedux.dispatch<IUpdateGeneralAction>({
      type: ActionType.UpdateGeneral,
      general: new General({
        background: {
          background: value.background,
          text: value.text,
        },
        surface: {
          background: value.surface,
          text: value.text,
        },
        primary: {
          background: value.primary,
          text: value.primaryText,
        },
        secondary: {
          background: value.secondary,
          text: value.secondaryText
        }
      })
    });
  }
}
