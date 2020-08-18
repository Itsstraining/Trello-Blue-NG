import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './modules/ui/ui.module';
// import { DashBoxComponent } from './components/dash-box/dash-box.component';
// import { DashBoxItemComponent } from './components/dash-box-item/dash-box-item.component';
import {ComponentsModule} from './components/components.module';
import {DashBoardServicesService} from './services/dash-board-services.service';
@NgModule({
  declarations: [
    AppComponent,
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
