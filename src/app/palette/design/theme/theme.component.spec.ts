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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be set after palette loaded', () => {
    // Arrange
    const prevForm = component.form;
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    expect(prevForm).toBeUndefined();
    component.palette$
      .subscribe(_ => expect(component.form).toBeTruthy());
  });

  it('name should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.name).toBeTruthy());
  });

  it('background should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.background).toBeTruthy());
  });

  it('textOnBackground should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.textOnBackground).toBeTruthy());
  });

  it('surface should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.surface).toBeTruthy());
  });

  it('primary should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.primary).toBeTruthy());
  });

  it('textOnPrimary should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.textOnPrimary).toBeTruthy());
  });

  it('secondary should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.secondary).toBeTruthy());
  });

  it('textOnSecondary should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.textOnSecondary).toBeTruthy());
  });

  it('warn should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.warn).toBeTruthy());
  });

  it('textOnWarn should return form control', () => {
    // Arrange
    const selector = MockNgRedux.getSelectorStub<AppState, PaletteState>();

    // Act
    selector.next(INITIAL_STATE.palette);
    selector.complete();

    // Assert
    component.palette$
      .subscribe(_ => expect(component.textOnWarn).toBeTruthy());
  });
});
