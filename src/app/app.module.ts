import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AlarmBoxComponent } from './alarm-box/alarm-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlCheckBoxModule, OwlSwitchModule } from 'owl-ng';
import { FormsModule } from '@angular/forms';
import { DoubleDigitsPipe } from './double-digits/double-digits.pipe';
import { AlarmListComponent } from './alarm-list/alarm-list.component';
import { AlarmSettingsComponent } from './alarm-settings/alarm-settings.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
    declarations: [
        AppComponent,
        BodyComponent,
        FooterComponent,
        HeaderComponent,
        AlarmBoxComponent,
        DoubleDigitsPipe,
        AlarmListComponent,
        AlarmSettingsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        // NG Store
        StoreModule.forRoot(reducers),

        OwlSwitchModule,
        OwlCheckBoxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
