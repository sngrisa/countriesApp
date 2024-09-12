import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../components/components.module";




@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
],
  exports: [
    SidebarComponent,
  ]
})
export class SharedModule { }
