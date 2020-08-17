import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteComponent } from './palette.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FileService } from '../shared/file/file.service';

describe('PaletteComponent', () => {
  let component: PaletteComponent;
  let fixture: ComponentFixture<PaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaletteComponent,
      ],
      imports: [
        NgReduxTestingModule,
        MatSnackBarModule,
      ],
      providers: [
        MockNgRedux,
        FileService,
        
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
});
