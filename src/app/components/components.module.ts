import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { SearchInputCapitalComponent } from './search-input-capital/search-input-capital.component';
import { ButtonsRegionsComponent } from './buttons-regions/buttons-regions.component';
import { CountriesTableRegionComponent } from './countries-table-region/countries-table-region.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    SearchInputComponent,
    CountriesTableComponent,
    SearchInputCapitalComponent,
    ButtonsRegionsComponent,
    CountriesTableRegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SearchInputComponent,
    CountriesTableComponent,
    SearchInputCapitalComponent,
    ButtonsRegionsComponent,
    CountriesTableRegionComponent
  ]
})
export class ComponentsModule { }
