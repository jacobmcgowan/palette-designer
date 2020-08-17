import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { Palette } from '../../store';

@Component({
  selector: 'app-palette-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent {
  @select() palette$: Observable<Palette>;
}
