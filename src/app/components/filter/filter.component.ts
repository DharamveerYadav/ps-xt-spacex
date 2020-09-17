import { Component, OnInit } from '@angular/core';
import { SpaceXService } from 'src/app/services/spacex.service';
import { IFilter } from 'src/app/shared/madel';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private _spacexService: SpaceXService) { }

  launchYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  filterQueryParams: IFilter = {} as IFilter;
  ngOnInit(): void {
this.filterQueryParams = {} as IFilter;
  }

  filterAsPerLaunchYear(event){
   this.filterQueryParams.launchYear = event.target.value;
   this._spacexService.getSpaceXLaunches(this.filterQueryParams);
  }

  filterAsPerSuccessLaunch(value: boolean){
    this.filterQueryParams.launchSuccess = value;
    this._spacexService.getSpaceXLaunches(this.filterQueryParams);
  }

  filterAsPerLandLaunch(value: boolean) {
    this.filterQueryParams.landSuccess = value;
    this._spacexService.getSpaceXLaunches(this.filterQueryParams);
  }

}
