import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private countriesService: CountryServiceService, private sanitizer: DomSanitizer) { }
  
  idCountry!: string;
  countryData!: Country;
  safeUrl: SafeResourceUrl | undefined;

  ngOnInit(): void {
    this.countriesService.getCountryById(this.activeRouter.snapshot.params['idCountry']).subscribe((country: any) => {
      this.countryData = country[0]; 
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.countryData.maps.googleMaps);
    });
  }
}
