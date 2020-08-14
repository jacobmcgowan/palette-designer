import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { IPaint } from '../../../store';

import {
  IAddAdditionalPaintAction,
  IUpdateAdditionalPaintAction,
  IRemoveAdditionalPaintAction,
  IPalette,
  IAppState,
  ActionType,
  Paint
} from '../../../store';

@Component({
  selector: 'app-palette-design-additional-paint',
  templateUrl: './additional-paint.component.html',
  styleUrls: ['./additional-paint.component.scss']
})
export class AdditionalPaintComponent implements OnInit {

  constructor(private _ngRedux: NgRedux<IAppState>) { }

  @select() palette$: Observable<IPalette>;

  ngOnInit(): void {
  }

  add(): void {
    this._ngRedux.dispatch<IAddAdditionalPaintAction>({
      type: ActionType.AddAdditionalPaint,
      paint: {
        name: '',
        background: {
          r: 0,
          g: 150,
          b: 136,
          a: 1,
        },
        text: {
          r: 255,
          g: 255,
          b: 255,
          a: 1,
        }
      }
    });
  }

  update(index: number, paint: IPaint): void {
    this._ngRedux.dispatch<IUpdateAdditionalPaintAction>({
      type: ActionType.UpdateAdditionalPaint,
      index,
      paint
    });
  }

  remove(index: number): void {
    this._ngRedux.dispatch<IRemoveAdditionalPaintAction>({
      type: ActionType.RemoveAdditionalPaint,
      index
    });
  }

}
