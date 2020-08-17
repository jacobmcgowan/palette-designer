import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, ViewChild, ElementRef } from '@angular/core';
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
export class PaletteComponent {
  constructor(
    private _ngRedux: NgRedux<AppState>,
    private _fileService: FileService,
    private _snackBar: MatSnackBar
  ) { }

  @ViewChild('file') fileInput: ElementRef;

  get title(): string {
    return 'Palette Designer';
  }

  /**
   * Opens the open palette design file dialog.
   */
  open(): void {
    this.fileInput.nativeElement.click();
  }

  /**
   * Downloads the palette design file.
   */
  save(): void {
    this._ngRedux
      .select(state => state.palette)
      .pipe(first())
      .subscribe(palette => {
        const json = JSON.stringify(palette.toJson
          ? palette.toJson()
          : palette);
        this._fileService.download(json, `${palette.theme.name}.json`, 'application/json');
      }, () => {
        this._snackBar.open('Failed to save file', 'Dismiss', {
          panelClass: ['error']
        });
      });
  }

  /**
   * Parses the selected palette design file.
   * @param fileEvent The file load event.
   */
  fileChanged(fileEvent: any): void {
    this._fileService.load(fileEvent, contents => this._updatePalette(contents));
    this.fileInput.nativeElement.value = null;
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
