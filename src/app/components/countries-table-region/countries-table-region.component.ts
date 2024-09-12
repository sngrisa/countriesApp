import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries-table-region',
  templateUrl: './countries-table-region.component.html',
  styleUrl: './countries-table-region.component.scss'
})
export class CountriesTableRegionComponent {

  @Input() countryData: Country[] = [];

}
