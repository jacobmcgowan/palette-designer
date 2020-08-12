import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IUpdateGeneralAction, IPalette, IAppState, General, ActionType } from '../../../store';

@Component({
  selector: 'app-palette-design-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  constructor(private _ngRedux: NgRedux<IAppState>) { }

  @select() palette$: Observable<IPalette>;

  ngOnInit(): void {
  }
}
