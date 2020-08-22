import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PaletteComponent } from './palette.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileService } from '../shared/file/file.service';
import { AppState, PaletteState, INITIAL_STATE } from '../store';

describe('PaletteComponent', () => {
  let component: PaletteComponent;
  let fixture: ComponentFixture<PaletteComponent>;
  let mockFileService: jasmine.SpyObj<FileService>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async(() => {
    mockFileService = jasmine.createSpyObj<FileService>('FileService', [
      'download',
      'load'
    ]);

    mockSnackBar = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', [
      'open'
    ]);

    TestBed.configureTestingModule({
      declarations: [
        PaletteComponent,
      ],
      imports: [
        NgReduxTestingModule,
      ],
      providers: [
        MockNgRedux,
        {
          provide: FileService,
          useValue: mockFileService,
        },
        {
          provide: MatSnackBar,
          useValue: mockSnackBar,
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    MockNgRedux.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open should trigger file input click', () => {
    spyOn(component.fileInput.nativeElement, 'click');
    component.open();
    expect(component.fileInput.nativeElement.click).toHaveBeenCalled();
  });

  it('fileChanged should trigger file load', () => {
    // Arrange
    const file = new Blob([''], {
      type: 'application/json'
    }) as File;

    // Act
    component.fileChanged({
      target: {
        files: {
          0: file,
          length: 1,
          item: (index) => file,
        },
      },
    });

    // Assert
    expect(mockFileService.load).toHaveBeenCalled();
  });

  it('save should trigger download', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    component.save();
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    selector
      .subscribe({
        next: () => expect(mockFileService.download).toHaveBeenCalled(),
        error: fail,
        complete: done,
      });
  });

  it('save should trigger error message on error', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    component.save();
    selector.next(null);
    selector.complete();

    // Assert
    selector
      .subscribe({
        next: () => {
          expect(mockFileService.download).toHaveBeenCalledTimes(0);
        },
        error: fail,
        complete: done,
      });
  });
});
