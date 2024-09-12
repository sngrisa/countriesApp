import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryServiceService } from './country-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CountryServiceService
  ]
})
export class ServicesModule { }
