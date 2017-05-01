import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';

import {
  AppNavbarComponent,
  AppFooterComponent,
  MainComponent,
  AboutComponent,
  CatalogComponent,
  PriceComponent,
  BlogComponent,
  ContactsComponent
} from "./components";
import {AppRoutingModule} from "./app.router.module";

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      AppRoutingModule
    ],
    declarations: [
      AppNavbarComponent,
      AppFooterComponent,
      MainComponent,
      AboutComponent,
      CatalogComponent,
      PriceComponent,
      BlogComponent,
      ContactsComponent
    ],
    exports: [
      AppNavbarComponent,
      AppFooterComponent,
      MainComponent,
      AboutComponent,
      CatalogComponent,
      PriceComponent,
      BlogComponent,
      ContactsComponent,
      AppRoutingModule
    ],
    providers: [ ]
})
export class CoreModule {
}
