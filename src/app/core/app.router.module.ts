import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {
  MainComponent,
  AboutComponent,
  CatalogComponent,
  PriceComponent,
  BlogComponent,
  ContactsComponent
} from "./components";

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'price', component: PriceComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacts', component: ContactsComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}