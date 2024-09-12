import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { CountryComponent } from './pages/country/country.component';

const routes: Routes = [
  {
    path: 'capital', component: ByCapitalComponent,
  },
  {
    path: 'region', component: ByRegionComponent,
  },
  {
    path: 'name', component: ByNameComponent
  },
  {
    path: 'country/:idCountry',
    component: CountryComponent
  },
  {
    path: '**',
    redirectTo: 'name',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
