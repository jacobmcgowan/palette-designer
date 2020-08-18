import { Injectable } from '@angular/core';

import { FileEvent } from './file-event';

type FileLoadedCallback = (contents: string) => any;

@Injectable({
  providedIn: 'root'
})
export class FileService {
  /**
   * Downloads a file with the given content.
   * @param content The content to include.
   * @param fileName The name of the file.
   * @param contentType The type of the content.
   */
  download(content: any, fileName: string, contentType: string): void {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  /**
   * Loads a file.
   * @param fileEvent The file selection event.
   * @param fileLoaded Callback to call when the file is loaded.
   */
  load(fileEvent: FileEvent, fileLoaded: FileLoadedCallback): void {
    console.log(fileEvent);
    if (fileEvent.target.files && fileEvent.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => fileLoaded(loadEvent.target.result as string);
      reader.readAsText(fileEvent.target.files[0]);
    }
  }
}
