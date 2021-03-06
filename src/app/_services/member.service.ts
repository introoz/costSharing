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

  newMember(member: Member): Observable<boolean> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(apiUrl + '/api/General/SaveMember/' /*+ JSON.parse(localStorage.getItem('currentUser')).username*/, member, options)
      .map((response: Response) => response.ok);
  }

  deleteMember(memberId: number): Observable<boolean> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(apiUrl + '/api/General/DeleteMember/' + memberId, options)
      .map((response: Response) => response.ok);
  }

  // deleteGroup(groupId: number): Observable<boolean> {
  //   let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.get(apiUrl + '/api/General/DeleteGroup/' + groupId, options)
  //     .map((response: Response) => response.ok);
  // }

}
