import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { FileService } from '../shared/file/file.service';
import { IUpdatePaletteAction, ActionType } from '../store';

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

  @ViewChild('file') fileInput: ElementRef;

  get title(): string {
    return 'Palette Designer';
  }

  ngOnInit(): void {
  }

  open(): void {
    this.fileInput.nativeElement.click();
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

  fileChanged(fileEvent: any): void {
    if (fileEvent.target.files && fileEvent.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => this._updatePalette(loadEvent.target.result);

      reader.readAsText(fileEvent.target.files[0]);
      this.fileInput.nativeElement.value = null;
    }
  }

  private _updatePalette(contents: any): void {
    const json = JSON.parse(contents);
    this._ngRedux.dispatch<IUpdatePaletteAction>({
      type: ActionType.UpdatePalette,
      palette: json,
    });
  }
}
