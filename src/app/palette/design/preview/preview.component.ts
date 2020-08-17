import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IPalette } from '../../../store';

@Component({
  selector: 'app-palette-design-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @select() palette$: Observable<IPalette>;
}
