import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';

import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [MenuComponent],
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
    MenuComponent,
    MenubarModule
  ]
})
export class CoreModule { }
