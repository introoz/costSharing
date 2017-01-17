import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'app/_services/authentication.service';
import { apiUrl } from 'app/_models/const';

import { Instance } from 'app/_models/instance';

@Injectable()
export class InstanceService {

  // thing: string;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) { }


  getInstancesByGroupId(groupId: number): Observable<Instance[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(apiUrl + '/api/General/GetInstancesByGroupId/' + groupId, options)
      .map((response: Response) => response.json());
  }

  newInstance(instance: Instance): Observable<boolean> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(apiUrl + '/api/General/SaveInstance/' /*+ JSON.parse(localStorage.getItem('currentUser')).username*/, instance, options)
      .map((response: Response) => response.ok);
  }

  deleteInstance(instanceId: number): Observable<boolean> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(apiUrl + '/api/General/DeleteInstance/' + instanceId, options)
      .map((response: Response) => response.ok);
  }

}
