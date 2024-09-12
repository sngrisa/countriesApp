import { Component, Input, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrl: './countries-table.component.scss'
})
export class CountriesTableComponent {

  @Input() countriesArray: Country[] = [];

  constructor(private countryService: CountryServiceService) { }
}
