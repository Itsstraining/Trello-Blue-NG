import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../modules/ui/ui.module';
import {DashBoxItemComponent} from './dash-box-item/dash-box-item.component';
import {DashBoxComponent} from './dash-box/dash-box.component';
import { FormsModule } from '@angular/forms';
import { DashPageComponent } from './dash-page/dash-page.component';
import { DashBoardContentComponent } from './dash-board-content/dash-board-content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashBoxComponent,
    DashBoxItemComponent,
    DashPageComponent,
    DashBoardContentComponent,
    NavbarComponent,
    Navbar1Component,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    FormsModule
  ],
  exports: [
    DashBoxComponent,
    DashBoxItemComponent,
    DashPageComponent,
    NavbarComponent,
    Navbar1Component,
    SidebarComponent
  ]
})
export class ComponentsModule { }
