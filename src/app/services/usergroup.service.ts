import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsergroupService {

  constructor(private _http: HttpClient) { }

  //view usergroup
  public viewUserGroup(){
    return this._http.get(`${baseUrl}/usergroup/`);
  }

  //add usergroup
  public addUserGroup(usergroup :any){
    return this._http.post(`${baseUrl}/usergroup/`, usergroup);
  }

  //update usergroup
  public updateUserGroup(usergroup : any){
    return this._http.put(`${baseUrl}/usergroup/`, usergroup);
  }

  //delete usergroup
  public deleteUserGroup(userGroupId : any){
    return this._http.delete(`${baseUrl}/usergroup/${userGroupId}`);
  }

  //viewUsersOfSingleUserGroup
  public viewSingleUserGroup(userGroupId : any){
    return this._http.get(`${baseUrl}/usergroup/${userGroupId}`);
  }

}
