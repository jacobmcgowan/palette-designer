import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_COLOR_FORMATS, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { ThemeComponent } from './theme.component';
import { ColorConverterService } from '../color-converter/color-converter.service';
import { AppState, INITIAL_STATE, PaletteState } from 'src/app/store';

describe('ThemeComponent', () => {
  let component: ThemeComponent;
  let fixture: ComponentFixture<ThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ThemeComponent,
      ],
      imports: [
        NgReduxTestingModule,
      ],
      providers: [
        MockNgRedux,
        ColorConverterService,
        {
          provide: MAT_COLOR_FORMATS,
          useValue: NGX_MAT_COLOR_FORMATS,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    MockNgRedux.reset();
    fixture = TestBed.createComponent(ThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    MockNgRedux.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be set after palette loaded', done => {
    // Arrange
    const prevForm = component.form;
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    expect(prevForm).toBeUndefined();
    component.palette$
      .subscribe({
        next: () => expect(component.form).toBeTruthy(),
        error: fail,
        complete: done
      });
  });

  it('name should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.name).toBeTruthy(),
        error: fail,
        complete: done
      });
  });

  it('background should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.background).toBeTruthy(),
        error: fail,
        complete: done
      });
  });

  it('textOnBackground should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.textOnBackground).toBeTruthy(),
        error: fail,
        complete: done,
      });
  });

  it('surface should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.surface).toBeTruthy(),
        error: fail,
        complete: done,
      });
  });

  it('primary should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.primary).toBeTruthy(),
        error: fail,
        complete: done,
      });
  });

  it('textOnPrimary should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert

    component.palette$
      .subscribe({
        next: () => expect(component.textOnPrimary).toBeTruthy(),
        error: fail,
        complete: done,
      });
  });

  it('secondary should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.secondary).toBeTruthy(),
        error: fail,
        complete: done,
      });
  });

  it('textOnSecondary should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.textOnSecondary).toBeTruthy(),
        error: fail,
        complete: done,
      });
  });

  it('warn should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.warn).toBeTruthy(),
        error: fail,
        complete: done,
      });
  });

  it('textOnWarn should return form control', done => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>('palette');

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe({
        next: () => expect(component.textOnWarn).toBeTruthy(),
        error: fail,
        complete: done,
      });
  });
});
