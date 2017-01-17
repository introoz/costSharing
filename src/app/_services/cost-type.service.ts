import { Injectable } from '@angular/core';
import { AuthenticationService } from 'app/_services/authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'app/_models/const';

import { CostType } from 'app/_models/cost-type';

@Injectable()
export class CostTypeService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) { }

  getCostTypes(instanceId: number): Observable<CostType[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    return this.http.get(apiUrl + '/api/General/GetCostTypes/' + instanceId + "/" + currentUser.username, options)
      .map((response: Response) => response.json());
  }

}


// @Injectable()
// export class GroupService {

//   // thing: string;

//   constructor(
//     private http: Http,
//     private authenticationService: AuthenticationService) { }


//   getGroups(): Observable<Group[]> {
//     let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
//     let options = new RequestOptions({ headers: headers });

//     //get users from api    
//     var currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     var user = currentUser && currentUser.username;
//     return this.http.get(apiUrl + '/api/General/GetGroupsByUsername/' + user, options)
//       .map((response: Response) => response.json());
//   }

//   saveGroup(group: Group): Observable<boolean> {
//     let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
//     let options = new RequestOptions({ headers: headers });

//     return this.http.post(apiUrl + '/api/General/SaveGroup/' + JSON.parse(localStorage.getItem('currentUser')).username, group, options)
//       .map((response: Response) => response.ok);
//   }

//   deleteGroup(groupId: number): Observable<boolean> {
//     let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
//     let options = new RequestOptions({ headers: headers });

//     return this.http.get(apiUrl + '/api/General/DeleteGroup/' + groupId, options)
//       .map((response: Response) => response.ok);
//   }
//   // JSON.parse(localStorage.getItem('currentUser')).username
// }