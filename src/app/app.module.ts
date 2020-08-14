import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ReactiveFormsModule } from '@angular/forms';

import { AdditionalPaintComponent } from './palette/design/additional-paint/additional-paint.component';
import { AppComponent } from './app.component';
import { ColorConverterService } from './palette/color-converter.service';
import { DesignComponent } from './palette/design/design.component';
import { GeneralComponent } from './palette/design/general/general.component';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import { JsonComponent } from './palette/json/json.component';
import { PaintComponent } from './palette/design/additional-paint/paint/paint.component';
import { PaletteComponent } from './palette/palette.component';
import { PreviewComponent } from './palette/design/preview/preview.component';
import { SpacerComponent } from './shared/spacer/spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    GeneralComponent,
    JsonComponent,
    PaletteComponent,
    SpacerComponent,
    PreviewComponent,
    PaintComponent,
    AdditionalPaintComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    NgReduxModule,
    NgxJsonViewerModule,
    NgxMatColorPickerModule,
    ReactiveFormsModule,
  ],
  providers: [
    ColorConverterService,
    {
      provide: MAT_COLOR_FORMATS,
      useValue: NGX_MAT_COLOR_FORMATS,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(redux: NgRedux<IAppState>) {
    redux.provideStore(
      createStore(rootReducer, INITIAL_STATE, composeWithDevTools())
    );
  }
}
