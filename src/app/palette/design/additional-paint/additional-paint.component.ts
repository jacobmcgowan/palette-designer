import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Paint } from '../../../store';

import {
  AddAdditionalPaintAction,
  UpdateAdditionalPaintAction,
  RemoveAdditionalPaintAction,
  Palette,
  AppState,
  ActionType
} from '../../../store';

@Component({
  selector: 'app-palette-design-additional-paint',
  templateUrl: './additional-paint.component.html',
  styleUrls: ['./additional-paint.component.scss']
})
export class AdditionalPaintComponent {
  constructor(private _ngRedux: NgRedux<AppState>) { }

  @select() palette$: Observable<Palette>;

  /**
   * Adds a paint.
   */
  add(): void {
    this._ngRedux.dispatch<AddAdditionalPaintAction>({
      type: ActionType.AddAdditionalPaint,
      paint: {
        id: uuidv4(),
        name: 'Teal',
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

  /**
   * Updates a paint's values.
   * @param index The index of the paint to update.
   * @param paint The new values to set.
   */
  update(index: number, paint: Paint): void {
    this._ngRedux.dispatch<UpdateAdditionalPaintAction>({
      type: ActionType.UpdateAdditionalPaint,
      index,
      paint
    });
  }

  /**
   * Removes a paint.
   * @param index The index of the paint to remove.
   */
  remove(index: number): void {
    this._ngRedux.dispatch<RemoveAdditionalPaintAction>({
      type: ActionType.RemoveAdditionalPaint,
      index
    });
  }

  /**
   * Identifies a paint.
   * @param paint The paint to identify.
   * @returns The identity of a paint.
   */
  identify(paint: Paint): string {
    return paint.id;
  }
}
