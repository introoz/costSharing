import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'app/_services/authentication.service';
import { apiUrl } from 'app/_models/const';

import { Member } from 'app/_models/member';

@Injectable()
export class MemberService {

  // thing: string;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) { }


  getMembersByGroupId(groupId: number): Observable<Member[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(apiUrl + '/api/General/GetMembersByGroupId/' + groupId, options)
      .map((response: Response) => response.json());
  }
}
