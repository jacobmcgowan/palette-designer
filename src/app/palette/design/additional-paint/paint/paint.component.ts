import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { IPaint, Paint, IColor } from '../../../../store';
import { IPaintForm } from './i-paint-form';
import { ColorConverterService } from 'src/app/palette/color-converter.service';

@Component({
  selector: 'app-palette-design-additional-paint-paint[paint]',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements OnInit, OnChanges {
  constructor(private _colorConverterService: ColorConverterService) { }

  @Input() paint: IPaint;
  @Output() updated = new EventEmitter<IPaint>();
  @Output() removed = new EventEmitter<void>();
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.paint.name),
      background: new FormControl(this._colorConverterService.paletteToForm(this.paint.background)),
      textOnBackground: new FormControl(this._colorConverterService.paletteToForm(this.paint.text)),
    });

    this.form.valueChanges
      .subscribe(value => this._update(value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.paint && !changes.paint.isFirstChange()) {
      if (!this._colorsMatch(changes.paint.previousValue.name, changes.paint.currentValue.name)) {
        this.form.get('name')
          .setValue(this._colorConverterService.paletteToForm(changes.paint.currentValue.name));
      }

      if (!this._colorsMatch(changes.paint.previousValue.background, changes.paint.currentValue.background)) {
        this.form.get('background')
          .setValue(this._colorConverterService.paletteToForm(changes.paint.currentValue.background));
      }

      if (!this._colorsMatch(changes.paint.previousValue.text, changes.paint.currentValue.text)) {
        this.form.get('textOnBackground')
          .setValue(this._colorConverterService.paletteToForm(changes.paint.currentValue.text));
      }
    }
  }

  remove(): void {
    this.removed.emit();
  }

  private _colorsMatch(a: IColor, b: IColor): boolean {
    return a.r === b.r &&
      a.g === b.g &&
      a.b === b.b &&
      a.a === b.a;
  }

  private _update(value: IPaintForm): void {
    this.updated.emit({
      id: this.paint.id,
      name: value.name,
      background: value.background,
      text: value.textOnBackground,
    });
  }
}
