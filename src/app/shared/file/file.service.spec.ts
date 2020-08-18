import { TestBed } from '@angular/core/testing';

import { FileService } from './file.service';
import { FileEvent } from './file-event';
import { Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('FileService', () => {
  let service: FileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('download should download JSON file', () => {
    // Arrange
    const fileName = 'tast.json';
    const mockA = jasmine.createSpyObj('a', ['click']);
    spyOn(document, 'createElement').and.returnValue(mockA);

    // Act
    service.download({}, fileName, 'application/json');

    // Assert
    expect(mockA.href).toContain('blob:');
    expect(mockA.download).toBe(fileName);
    expect(mockA.click).toHaveBeenCalled();
  });

  it('load should read file', () => {
    // Arrange
    const contents = '{ id: 0 }';
    const observer = {
      fileLoaded: (loadedContents) => {}
    };
    const file = new File([contents], 'filename', { type: 'application/json' });
    const event: FileEvent = {
      target: {
        files: {
          0: file,
          length: 1,
          item: (index: number) => file,
        }
      }
    };
    const mockReader = jasmine.createSpyObj<FileReader>('FileReader', [
      'readAsText',
    ]);

    spyOn(window, 'FileReader').and.returnValue(mockReader);
    spyOn(observer, 'fileLoaded');

    // Act
    service.load(event, observer.fileLoaded);

    // Assert
    expect(mockReader.readAsText).toHaveBeenCalled();
  });
});
