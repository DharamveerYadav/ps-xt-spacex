import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IFilter, IProgram } from '../shared/madel';

@Injectable({
     providedIn:'root'
})
export class SpaceXService {
    constructor(private _http: HttpClient) { }    
    private _programs: BehaviorSubject<IProgram[]> = new BehaviorSubject(null);
    public programs$: Observable<IProgram[]> = this._programs.asObservable();
    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);
    isLoading$: Observable<boolean> = this._isLoading.asObservable();

    fetchSpacexData(url){
        this._isLoading.next(true);
        return this._http.get(url)
        .pipe(
            map((res: []) => {
              let temp: IProgram[] = []
               res.forEach((value: any) => {
               temp.push({
                       missionName: value.mission_name,
                       flightNumber: value.flight_number,
                       missionId: value.mission_id,
                       image: value.links.mission_patch_small,
                       launchYear: value.launch_year,
                       launchSuccess: value.launch_success ? 'True' : 'False'
  
                   })
               })
               return temp;
            }),
            finalize(() => {
              // Do some work after complete...
              this._isLoading.next(false);
            })
        );
    }
 
    getSpaceXLaunches(filterQuery?:IFilter){
        let url = environment.url;
        if(filterQuery){
           if(filterQuery.launchSuccess !== undefined){
               url = url + `&launch_success=${filterQuery.launchSuccess}`;
           }
           if(filterQuery.landSuccess !== undefined){
            url = url + `&land_success=${filterQuery.landSuccess}`;
        }
        if(filterQuery.launchYear !== undefined){
            url = url + `&launch_year=${filterQuery.launchYear}`;
        }
        } 
        this.fetchSpacexData(url).subscribe(launches => {
            this._programs.next(launches);
        });     
    }

    

   
}
