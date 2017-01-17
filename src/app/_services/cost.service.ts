import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import { AuthHttp } from 'angular2-jwt';

import { AuthenticationService } from 'app/_services/authentication.service';
import { apiUrl } from 'app/_models/const';

import { COSTS } from 'app/_models/Cost';
import { Cost } from 'app/_models/Cost';

@Injectable()
export class CostService {

  thing: string;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) { }


  getCosts(): Observable<Cost[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    //get users from api
    return this.http.get(apiUrl + '/api/Costs', options)
      .map((response: Response) => response.json());
  }

  GetCostByInstanceId(instanceId: number): Observable<Cost[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //get users from api
    return this.http.get(apiUrl + '/api/General/GetCostByInstanceId/' + instanceId + '/' + currentUser.username, options)
      .map((response: Response) => response.json());
  }

  saveCost(cost: Cost): Observable<boolean> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    console.log('a tu?');
    return this.http.post(apiUrl + '/api/General/SaveCost/' + JSON.parse(localStorage.getItem('currentUser')).username, cost, options)
      .map((response: Response) => response.ok);
  }

  // updateCosts(costs: Cost[]){
  //   console.log('updateCosts');
  //   this.costs.
  //   this.costs = costs;
  // }

  // getDownloadedCosts(): Promise<Cost[]> {
  //   console.log('getDownloadedCosts');
  //   return Promise.resolve(this.costs);
  // }
  // getCosts() {
  //   return this.http.get(apiUrl+'/api/Costs')
  //     .subscribe(
  //     data => this.thing = data.toString(),
  //     err => console.log(err),
  //     () => console.log('Request Complete')
  //     );
  // }


  // getCosts(): Promise<Cost[]> {
  //   return Promise.resolve(COSTS);
  // }
}
