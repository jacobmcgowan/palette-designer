import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPaintComponent } from './additional-paint.component';

describe('AdditionalPaintComponent', () => {
  let component: AdditionalPaintComponent;
  let fixture: ComponentFixture<AdditionalPaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalPaintComponent ]
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
});
