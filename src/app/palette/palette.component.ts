import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { first } from 'rxjs/operators';

import { AppState } from '../store';
import { FileService } from '../shared/file/file.service';
import { UpdatePaletteAction, ActionType } from '../store';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {
  constructor(
    private _ngRedux: NgRedux<AppState>,
    private _fileService: FileService,
    private _snackBar: MatSnackBar
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
      .pipe(first())
      .subscribe(palette => {
        const json = JSON.stringify(palette.toJson
          ? palette.toJson()
          : palette);
        this._fileService.download(json, `${palette.theme.name}.json`, 'application/json');
      }, error => {
        this._snackBar.open('Failed to save file', 'Dismiss', {
          panelClass: ['error']
        });
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
    try {
      const json = JSON.parse(contents);
      this._ngRedux.dispatch<UpdatePaletteAction>({
        type: ActionType.UpdatePalette,
        palette: json,
      });
    } catch (error) {
      this._snackBar.open('Failed to read file', 'Dismiss');
    }
  }
}
