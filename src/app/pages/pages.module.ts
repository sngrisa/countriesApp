import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './by-capital/by-capital.component';
import { ByRegionComponent } from './by-region/by-region.component';
import { ByNameComponent } from './by-name/by-name.component';
import { CountryComponent } from './country/country.component';
import { ComponentsModule } from "../components/components.module";



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    ByNameComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
],
  exports: [
    ByCapitalComponent,
    ByRegionComponent,
    ByRegionComponent
  ]
})
export class PagesModule { }
