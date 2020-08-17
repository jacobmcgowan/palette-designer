import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteComponent } from './palette.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { FileService } from '../shared/file/file.service';
import { AppState, Palette, PaletteState, INITIAL_STATE } from '../store';
import { first, delay } from 'rxjs/operators';

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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    component.fileChanged({});
    expect(mockFileService.load).toHaveBeenCalled();
  });

  it('save should trigger download', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();
    component.save();

    // Assert
    selector
      .pipe(delay(5))
      .subscribe(_ => expect(mockFileService.download).toHaveBeenCalled());
  });

  it('save should trigger error message on error', () => {
    // Arrange
    const errorMsg = 'Failed to save file';
    const errorAction = 'Dismiss';
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(null);
    selector.complete();
    component.save();

    // Assert
    selector
      .pipe(delay(5))
      .subscribe(_ => {
        expect(mockFileService.download).toHaveBeenCalledTimes(0);
        expect(mockSnackBar.open).toHaveBeenCalledWith(errorMsg, errorAction);
      });
  });
});
