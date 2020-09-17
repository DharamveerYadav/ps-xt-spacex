import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IFilter, IProgram } from '../shared/madel';




@Injectable({
     providedIn:'root'
})
export class SpaceXService {
    constructor(private _http: HttpClient) { }    
    private _programs: BehaviorSubject<IProgram[]> = new BehaviorSubject(null);
    public programs$: Observable<IProgram[]> = this._programs.asObservable();

    getProgramLaunches(url){
        return this._http.get(url)
        .pipe(
            map((res: []) => {
              console.log("inside map url", res);
              let temp: IProgram[] = []
               res.forEach((value: any) => {
               temp.push({
                       title: value.mission_name,
                       image: value.links.mission_patch_small,
                       launchYear: value.launch_year,
                       launchSuccess: value.launch_success
  
                   })
               })
               return temp;
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
        console.log("url ", url);
        this.getProgramLaunches(url).subscribe(launches => {
            console.log("launches ", launches);
            this._programs.next(launches);
        });     
    }

    

   
}
