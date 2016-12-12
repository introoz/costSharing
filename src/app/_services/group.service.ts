import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import { AuthHttp } from 'angular2-jwt';

import { AuthenticationService } from 'app/_services/authentication.service';
import { apiUrl } from 'app/_models/const';

import { Group } from 'app/_models/group';
import { User } from 'app/_models/user';
// import { COSTS } from 'app/_models/Cost';
// import { Cost } from 'app/_models/Cost';

@Injectable()
export class GroupService {

  // thing: string;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) { }


  getGroups(): Observable<Group[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    //get users from api    
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var user = currentUser && currentUser.username;
    return this.http.get(apiUrl + '/api/General/GetGroupsByUsername/' + user, options)
      .map((response: Response) => response.json());
  }
}
