import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainComponent} from "./core/components/main/main.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent }

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