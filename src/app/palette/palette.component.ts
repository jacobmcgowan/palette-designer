import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { first } from 'rxjs/operators';

import { AppState, PaletteState } from '../store';
import { FileService } from '../shared/file/file.service';
import { UpdatePaletteAction, ActionType } from '../store';
import { FileEvent } from '../shared/file/file-event';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent {
  constructor(
    private _ngRedux: NgRedux<AppState>,
    private _fileService: FileService,
    private _snackBar: MatSnackBar,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    this._iconRegistry.addSvgIcon(
      'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    );
  }

  @ViewChild('file') fileInput: ElementRef;
  @select() palette$: Observable<PaletteState>;

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
    const failedMessage = 'Failed to save file';
    const dismissAction = 'Dismiss';
    this.palette$
      .pipe(first())
      .subscribe({
        next: palette => {
          try {
          const json = JSON.stringify(palette.toJson
            ? palette.toJson()
            : palette);
          this._fileService.download(json, `${palette.theme.name}.json`, 'application/json');
          } catch (error) {
            this._snackBar.open(failedMessage, dismissAction);
          }
        },
        error: () => this._snackBar.open(failedMessage, dismissAction)
      });
  }

  /**
   * Parses the selected palette design file.
   * @param fileEvent The file load event.
   */
  fileChanged(fileEvent: FileEvent): void {
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
