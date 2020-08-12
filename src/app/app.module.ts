import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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

import { AppComponent } from './app.component';
import { ColorComponent } from './palette/design/color/color.component';
import { DesignComponent } from './palette/design/design.component';
import { GeneralComponent } from './palette/design/general/general.component';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import { JsonComponent } from './palette/json/json.component';
import { PaletteComponent } from './palette/palette.component';
import { SpacerComponent } from './shared/spacer/spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DesignComponent,
    GeneralComponent,
    JsonComponent,
    PaletteComponent,
    SpacerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
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
  providers: [{
    provide: MAT_COLOR_FORMATS,
    useValue: NGX_MAT_COLOR_FORMATS,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(redux: NgRedux<IAppState>) {
    redux.configureStore(rootReducer, INITIAL_STATE);
  }
}
