import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  constructor() { }

  get title(): string {
    return 'Palette Designer';
  }

  name = 'My Palette';

  ngOnInit(): void {
  }

}
