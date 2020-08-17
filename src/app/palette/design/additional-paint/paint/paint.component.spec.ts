import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_COLOR_FORMATS, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';

import { PaintComponent } from './paint.component';
import { PaintState, ColorState, Paint } from 'src/app/store';
import { ColorConverterService } from '../../color-converter/color-converter.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  template: `<app-palette-design-additional-paint-paint
              [paint]="paint"
              (removed)="onRemoved()">
            </app-palette-design-additional-paint-paint>`
})
class TestWrapperComponent {
  @ViewChild(PaintComponent) paintComponent: any;
  paint: Paint;
  onRemoved: () => void;
}

describe('PaintComponent', () => {
  let testWrapper: TestWrapperComponent;
  let component: PaintComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaintComponent,
        TestWrapperComponent,
      ],
      providers: [
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
    fixture = TestBed.createComponent(TestWrapperComponent);
    testWrapper = fixture.componentInstance;
    testWrapper.paint = new PaintState({
      id: 'test',
      name: 'Test',
      background: new ColorState({
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }),
      text: new ColorState({
        r: 0,
        g: 0,
        b: 0,
        a: 0.87,
      })
    });
    testWrapper.onRemoved = () => {};

    fixture.detectChanges();

    component = testWrapper.paintComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should return control', () => {
    expect(component.name).toBeTruthy();
  });

  it('background should return control', () => {
    expect(component.background).toBeTruthy();
  });

  it('textOnBackground should return control', () => {
    expect(component.textOnBackground).toBeTruthy();
  });

  it('name value should change when paint name changed', () => {
    // Arrange
    const prevPaint = component.paint;
    spyOn(component.name, 'setValue');
    spyOn(component.background, 'setValue');
    spyOn(component.textOnBackground, 'setValue');

    // Act
    testWrapper.paint = new PaintState({
      id: 'test',
      name: 'Test change',
      background: new ColorState({
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }),
      text: new ColorState({
        r: 0,
        g: 0,
        b: 0,
        a: 0.87,
      })
    });

    fixture.detectChanges();

    // Assert
    expect(component.name.setValue).toHaveBeenCalled();
    expect(component.background.setValue).toHaveBeenCalledTimes(0);
    expect(component.textOnBackground.setValue).toHaveBeenCalledTimes(0);
  });

  it('background value should change when paint background changed', () => {
    // Arrange
    const prevPaint = component.paint;
    spyOn(component.name, 'setValue');
    spyOn(component.background, 'setValue');
    spyOn(component.textOnBackground, 'setValue');

    // Act
    testWrapper.paint = new PaintState({
      id: 'test',
      name: 'Test',
      background: new ColorState({
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      }),
      text: new ColorState({
        r: 0,
        g: 0,
        b: 0,
        a: 0.87,
      })
    });

    fixture.detectChanges();

    // Assert
    expect(component.name.setValue).toHaveBeenCalledTimes(0);
    expect(component.background.setValue).toHaveBeenCalled();
    expect(component.textOnBackground.setValue).toHaveBeenCalledTimes(0);
  });

  it('textOnBackground value should change when paint text changed', () => {
    // Arrange
    const prevPaint = component.paint;
    spyOn(component.name, 'setValue');
    spyOn(component.background, 'setValue');
    spyOn(component.textOnBackground, 'setValue');

    // Act
    testWrapper.paint = new PaintState({
      id: 'test',
      name: 'Test',
      background: new ColorState({
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }),
      text: new ColorState({
        r: 100,
        g: 100,
        b: 100,
        a: 1,
      })
    });

    fixture.detectChanges();

    // Assert
    expect(component.name.setValue).toHaveBeenCalledTimes(0);
    expect(component.background.setValue).toHaveBeenCalledTimes(0);
    expect(component.textOnBackground.setValue).toHaveBeenCalled();
  });

  it('remove should emit removed event', () => {
    spyOn(testWrapper, 'onRemoved');
    component.remove();
    expect(testWrapper.onRemoved).toHaveBeenCalled();
  });
});
