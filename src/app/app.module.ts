import {NgModule} from '@angular/core';
import {CoreModule} from "./core/core.module";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.router.module";

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
