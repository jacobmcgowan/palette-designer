import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { FileService } from '../shared/file/file.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {
  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _fileService: FileService
  ) { }

  get title(): string {
    return 'Palette Designer';
  }

  ngOnInit(): void {
  }

  save(): void {
    this._ngRedux
      .select(state => state.palette)
      .subscribe(palette => {
        const json = JSON.stringify(palette.toJson
          ? palette.toJson()
          : palette);
        this._fileService.download(json, 'palette-design.json', 'application/json');
      });
  }
}
