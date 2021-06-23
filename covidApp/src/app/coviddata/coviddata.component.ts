import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
export interface coviddata{
    id:number;
    updated:number;
    country:string;
    countryInfo:{
      _id:number;
      iso2:string;
      iso3:string;
      lat:number;
      long:number;
      flag:string;
    }
    cases:number;
    todayCases:number;
    deaths:number;
    todayDeaths:number;
    recovered:number;
    todayRecovered:number;
    active:number;
    critical:number;
    casesPerOneMillion:number;
    deathsPerOneMillion:number;
    tests:number;
    testsPerOneMillion:number;
    population:number;
    continent:string;
    oneCasePerPeople:number;
    oneDeathPerPeople:number;
    oneTestPerPeople:number;
    undefined:number;
    activePerOneMillion:number;
    recoveredPerOneMillion:number;
    criticalPerOneMillion:number;
  }
export interface coviddata1
{
  seqno:number;
  country:string;
  active:number;
}
@Component({
  selector: 'app-coviddata',
  templateUrl: './coviddata.component.html',
  styleUrls: ['./coviddata.component.css']
})
export class CoviddataComponent implements OnInit {
  displayedColumns: string[] = ['seqno','country', 'active'];
  dataSource:coviddata;
  data1:coviddata1;
  count:number=0;
  constructor(private httpclient:HttpClient) { }

  ngOnInit():void{
    this.getCovidData();
  }
  getCovidData()
  {
    this.httpclient.get<any>('https://corona.lmao.ninja/v2/countries').subscribe(
      response =>{
        this.dataSource = response;   
        for(const k in this.dataSource)
        {
          this.count=this.count+1;
          this.dataSource[k].id=this.count;
        }
      }
    );
  }
  getvalue()
  {
      console.log("kishore");
  }
}