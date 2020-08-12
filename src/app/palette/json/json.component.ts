import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IPalette } from '../../store';

@Component({
  selector: 'app-palette-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {
  constructor() { }
  @select() palette$: Observable<IPalette>;

  ngOnInit(): void {
  }

}
