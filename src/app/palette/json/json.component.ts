import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { Palette, AppState } from '../../store';

@Component({
  selector: 'app-palette-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {
  constructor(private _ngRedux: NgRedux<AppState>) { }
  @select() palette$: Observable<Palette>;

  ngOnInit(): void {
  }

}
