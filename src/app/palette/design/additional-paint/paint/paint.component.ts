import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Paint, Color } from '../../../../store';
import { PaintForm } from './paint-form';
import { ColorConverterService } from 'src/app/palette/design/color-converter/color-converter.service';
import { invalidColorValidator } from '../../invalid-color-validator';

@Component({
  selector: 'app-palette-design-additional-paint-paint[paint]',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit, OnChanges {
  constructor(private _colorConverterService: ColorConverterService) { }

  /**
   * The paint to display.
   */
  @Input() paint: Paint;

  /**
   * Callback to call when the paint's values are changed.
   */
  @Output() updated = new EventEmitter<Paint>();

  /**
   * Callback to when the paint should be removed.
   */
  @Output() removed = new EventEmitter<void>();

  form: FormGroup;

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get background(): AbstractControl {
    return this.form.get('background');
  }

  get textOnBackground(): AbstractControl {
    return this.form.get('textOnBackground');
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.paint.name, [ Validators.required ]),
      background: new FormControl(
        this._colorConverterService.paintToForm(this.paint.background),
        [
          invalidColorValidator
        ]
      ),
      textOnBackground: new FormControl(
        this._colorConverterService.paintToForm(this.paint.text),
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
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.paint && !changes.paint.isFirstChange()) {
      if (changes.paint.previousValue.name !== changes.paint.currentValue.name) {
        this.name.setValue(
          this._colorConverterService.paintToForm(changes.paint.currentValue.name),
          { emitEvent: false }
        );
      }

      this._colorConverterService.setForm(this.background, changes.paint.currentValue.background);
      this._colorConverterService.setForm(this.textOnBackground, changes.paint.currentValue.text);
    }
  }

  /**
   * Signals that the paint should be removed.
   */
  remove(): void {
    this.removed.emit();
  }

  private _colorsMatch(a: Color, b: Color): boolean {
    return a.r === b.r &&
      a.g === b.g &&
      a.b === b.b &&
      a.a === b.a;
  }

  private _update(value: PaintForm): void {
    this.updated.emit({
      id: this.paint.id,
      name: value.name,
      background: value.background,
      text: value.textOnBackground,
    });
  }
}
