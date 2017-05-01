import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdToolbarModule, MdButtonModule, MdMenuModule, MdIconModule} from '@angular/material';

import {AppNavbarComponent} from "./components";

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      BrowserAnimationsModule,
      MdButtonModule,
      MdToolbarModule,
      MdMenuModule,
      MdIconModule
    ],
    declarations: [
      AppNavbarComponent
    ],
    exports: [
      AppNavbarComponent
    ],
    providers: [ ]
})
export class CoreModule {
}
