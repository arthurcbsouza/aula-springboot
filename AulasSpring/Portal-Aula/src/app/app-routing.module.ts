import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaTesteComponent} from "./pages/pagina-teste/pagina-teste.component";
import {AppComponent} from "./app.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {PageParamsComponent} from "./pages/page-params/page-params.component";
import {FirstFormComponent} from "./pages/first-form/first-form.component";

const routes: Routes = [
  { path : 'home', component: MainPageComponent },
  { path : 'test', component: PaginaTesteComponent },
  { path : 'pageWithParams/:message', component: PageParamsComponent },
  { path : 'first-form', component: FirstFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
