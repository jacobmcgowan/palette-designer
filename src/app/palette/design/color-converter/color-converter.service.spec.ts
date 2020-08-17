import { TestBed } from '@angular/core/testing';
import { Color as FormColor } from '@angular-material-components/color-picker';

import { IColor } from '../../../store';
import { ColorConverterService } from './color-converter.service';
import { FormControl } from '@angular/forms';

describe('ColorConverterService', () => {
  let service: ColorConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('matches should return false if a property does not match', () => {
    // Arrange
    const formColor = new FormColor(255, 255, 255, 1);
    const colors: IColor[] = [{
      r: 0,
      g: 255,
      b: 255,
      a: 1,
    }, {
      r: 255,
      g: 0,
      b: 255,
      a: 1,
    }, {
      r: 255,
      g: 255,
      b: 0,
      a: 1,
    }, {
      r: 255,
      g: 255,
      b: 255,
      a: 0,
    }];

    // Act
    // Assert
    colors
      .forEach(color => expect(service.matches(color, formColor)).toBeFalse());
  });

  it('matches should return true if all properties match', () => {
    // Arrange
    const formColor = new FormColor(255, 250, 245, 1);
    const color: IColor = {
      r: 255,
      g: 250,
      b: 245,
      a: 1,
    };

    // Act
    // Assert
    expect(service.matches(color, formColor)).toBeTrue();
  });

  it('paintToForm should return matching color', () => {
    // Arrange
    const color: IColor = {
      r: 255,
      g: 250,
      b: 245,
      a: 1,
    };

    // Act
    const result = service.paintToForm(color);

    // Assert
    expect(service.matches(color, result)).toBeTrue();
  });

  it('formToPaint should return matching color', () => {
    // Arrange
    const formColor = new FormColor(255, 250, 245, 1);

    // Act
    const result = service.formToPaint(formColor);

    // Assert
    expect(service.matches(result, formColor)).toBeTrue();
  });

  it('setForm should not set form if colors match', () => {
    // Arrange
    const formColor = new FormColor(255, 250, 245, 1);
    const color: IColor = {
      r: 255,
      g: 250,
      b: 245,
      a: 1,
    };
    const control = new FormControl(formColor);

    spyOn(control, 'setValue');

    // Act
    service.setForm(control, color);

    // Assert
    expect(control.setValue).toHaveBeenCalledTimes(0);
  });

  it('setForm should set form if colors do not match', () => {
    // Arrange
    const formColor = new FormColor(255, 250, 245, 1);
    const color: IColor = {
      r: 255,
      g: 255,
      b: 225,
      a: 0.87,
    };
    const control = new FormControl(formColor);

    spyOn(control, 'setValue');

    // Act
    service.setForm(control, color);

    // Assert
    expect(control.setValue).toHaveBeenCalled();
  });
});
