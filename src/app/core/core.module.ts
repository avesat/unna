import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';

import {AccordionModule} from 'ngx-accordion'

import {
  AppNavbarComponent,
  AppFooterComponent,
  MainComponent,
  AboutComponent,
  CatalogComponent,
  CatalogHeadComponent,
  CatalogListComponent,
  CatalogListItemComponent,
  CatalogListStartComponent,
  CatalogListDetailComponent,
  CatalogListDetailItemComponent,
  PriceComponent,
  BlogComponent,
  ContactsComponent
} from "./components";
import {CatalogService} from "./services/catalog.service";
import {AppRoutingModule} from "./app.router.module";

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      AccordionModule,
      AppRoutingModule
    ],
    declarations: [
      AppNavbarComponent,
      AppFooterComponent,
      MainComponent,
      AboutComponent,
      CatalogComponent,
      CatalogListComponent,
      CatalogHeadComponent,
      CatalogListItemComponent,
      CatalogListStartComponent,
      CatalogListDetailComponent,
      CatalogListDetailItemComponent,
      PriceComponent,
      BlogComponent,
      ContactsComponent
    ],
    exports: [
      AppNavbarComponent,
      AppFooterComponent,
      AccordionModule,
      AppRoutingModule
    ],
    providers: [
      CatalogService
    ]
})
export class CoreModule {
}
