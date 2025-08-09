import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { BasicService } from "./services/basic.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { DataTableComponent } from './components/data-table/data-table.component';
import {MatTableModule} from "@angular/material/table";
import {PaginaTesteComponent} from "./pages/pagina-teste/pagina-teste.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {PageParamsComponent} from "./pages/page-params/page-params.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    DataTableComponent,
    MainPageComponent,
    PaginaTesteComponent,
    PageParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatMenu,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [BasicService],
  exports: [
    DataTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
