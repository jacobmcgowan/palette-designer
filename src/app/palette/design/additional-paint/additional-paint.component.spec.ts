import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockNgRedux, NgReduxTestingModule } from '@angular-redux/store/testing';

import { AdditionalPaintComponent } from './additional-paint.component';
import { ActionType, IPaint, IAddAdditionalPaintAction } from 'src/app/store';

describe('AdditionalPaintComponent', () => {
  let component: AdditionalPaintComponent;
  let fixture: ComponentFixture<AdditionalPaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdditionalPaintComponent,
      ],
      imports: [
        NgReduxTestingModule,
      ],
      providers: [
        MockNgRedux,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add should add paint to state', () => {
    // Arrange
    const redux = MockNgRedux.getInstance();
    const action = {
      type: ActionType.AddAdditionalPaint,
      paint: {
        id: jasmine.any(String),
        name: 'Teal',
        background: {
          r: 0,
          g: 150,
          b: 136,
          a: 1,
        },
        text: {
          r: 255,
          g: 255,
          b: 255,
          a: 1,
        }
      }
    };

    spyOn(redux, 'dispatch').and.stub();

    // Act
    component.add();

    // Assert
    expect(redux.dispatch).toHaveBeenCalledWith(action);
  });

  it('update should update paint in state', () => {
    // Arrange
    const redux = MockNgRedux.getInstance();
    const index = 1;
    const paint: IPaint = {
      id: 'test',
      name: 'Test',
      background: {
        r: 0,
        g: 150,
        b: 136,
        a: 1,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }
    };
    const action = {
      type: ActionType.UpdateAdditionalPaint,
      index,
      paint,
    };

    spyOn(redux, 'dispatch').and.stub();

    // Act
    component.update(index, paint);

    // Assert
    expect(redux.dispatch).toHaveBeenCalledWith(action);
  });

  it('remove should remove paint from state', () => {
    // Arrange
    const redux = MockNgRedux.getInstance();
    const index = 1;
    const action = {
      type: ActionType.RemoveAdditionalPaint,
      index,
    };
    spyOn(redux, 'dispatch').and.stub();

    // Act
    component.remove(index);

    // Assert
    expect(redux.dispatch).toHaveBeenCalledWith(action);
  });

  it('identify returns the paint id', () => {
    const paint: IPaint = {
      id: 'test',
      name: 'Test',
      background: {
        r: 0,
        g: 150,
        b: 136,
        a: 1,
      },
      text: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }
    };
    expect(component.identify(paint)).toBe(paint.id);
  });
});
