import { Component } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-buttons-regions',
  templateUrl: './buttons-regions.component.html',
  styleUrl: './buttons-regions.component.scss'
})
export class ButtonsRegionsComponent {

  countryData: Country[] = [];

  regions: string[] = ["africa","america","asia","europe","oceania"]; 

  constructor(private countryService: CountryServiceService) { }
  
  selectRegion = (region: string) => {
  this.countryService.getCountriesByRegion(region).subscribe((country: Country[]) => {
    this.countryData = country;
  });
}

}
