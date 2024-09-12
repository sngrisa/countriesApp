import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})

export class CountryServiceService {

  urlParams = {
    url: "https://restcountries.com/v3.1"
  }

  constructor(private http: HttpClient) { }

  getCountries = (): Observable<Country[]> =>{
    return this.http.get<Country[]>(`${this.urlParams.url}/all`);
  }

  getCountryById = (idCountry: string): Observable<Country> =>{
    return this.http.get<Country>(`${this.urlParams.url}/alpha/${idCountry}`);
  }

  getCountriesByName = (name: string): Observable<Country[]> =>{
    return this.http.get<Country[]>(`${this.urlParams.url}/name/${name}`);
  }

  getCountriesByRegion = (region: string): Observable<Country[]>=>{
    return this.http.get<Country[]>(`${this.urlParams.url}/region/${region}`);
  }

  getCountriesByCapital = (capital: string): Observable<Country[]> =>{
    return this.http.get<Country[]>(`${this.urlParams.url}/capital/${capital}`);
  }
}
