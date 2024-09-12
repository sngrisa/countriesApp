import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent implements OnInit {

  constructor(private countriesService: CountryServiceService){}

  @Input('') placeHolder: string = "";

  inputSearch: string = "";
  hasError: boolean = false;
  messageError: string = "";
  countriesArray: Country[] = [];

  ngOnInit(): void {
    
  }

  search = () =>{
    this.countriesService.getCountriesByName(this.inputSearch).subscribe((countries: Country[]) => {
      this.countriesArray = countries;
      this.hasError = false;
    }, (err: any) => this.hasError = true);
  }
}
