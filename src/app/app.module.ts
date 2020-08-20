import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './modules/ui/ui.module';
import { Navbar1Component } from './navbar1/navbar1.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
