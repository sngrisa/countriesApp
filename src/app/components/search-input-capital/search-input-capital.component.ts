import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryServiceService } from '../../services/country-service.service';

@Component({
  selector: 'app-search-input-capital',
  templateUrl: './search-input-capital.component.html',
  styleUrl: './search-input-capital.component.scss'
})
export class SearchInputCapitalComponent {

  constructor(private countriesService: CountryServiceService) { }

  placeHolder: string = `Input the capital of Country`;

  inputSearch: string = "";
  hasError: boolean = false;
  messageError: string = "";
  countriesArray: Country[] = [];

  ngOnInit(): void {
    
  }

  search = () =>{
    this.countriesService.getCountriesByCapital(this.inputSearch).subscribe((countries: Country[]) => {
      this.countriesArray = countries;
      this.hasError = false;
    }, (err: any) => this.hasError = true);
  }

  keyEnter = () =>{
    
  }
}
