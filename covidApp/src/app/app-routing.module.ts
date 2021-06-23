import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryspecComponent } from './countryspec/countryspec.component';
import { CoviddataComponent } from './coviddata/coviddata.component';

const routes: Routes = [
  {path:defaultStatus,component:CountryspecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
