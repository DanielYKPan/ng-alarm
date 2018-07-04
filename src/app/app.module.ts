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

@NgModule({
    declarations: [
        AppComponent,
        BodyComponent,
        FooterComponent,
        HeaderComponent,
        AlarmBoxComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,

        OwlSwitchModule,
        OwlCheckBoxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
