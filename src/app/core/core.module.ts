import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent, NavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    MenubarModule
  ],
  exports: [
    //Shared modules.
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarComponent,
    MenubarModule
  ]
})
export class CoreModule {}
