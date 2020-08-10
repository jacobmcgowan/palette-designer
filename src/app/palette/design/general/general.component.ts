import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Color } from '@angular-material-components/color-picker';

@Component({
  selector: 'app-palette-design-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    backgroundColor: new FormControl(new Color(255, 255, 255, 1))
  });

  ngOnInit(): void {
    this.form.valueChanges
      .subscribe(value => this._onChange(value));
  }

  private _onChange(value: any) {
  }

}
