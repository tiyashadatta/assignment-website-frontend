import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http : HttpClient
  ) { }

  //view all users
  public viewAllUsers(){
    return this._http.get(`${baseUrl}/user/`);
  }

  //view single user
  public viewSingleUser(userId :any){
    return this._http.get(`${baseUrl}/user/${userId}`);
  }

  //add user
  public addUser(user :any){
    return this._http.post(`${baseUrl}/user/`, user);
  }

  //update user
  public updateUser(user : any){
    return this._http.put(`${baseUrl}/user/`, user);
  }

  //delete user
  public deleteUser(userId : any){
    return this._http.delete(`${baseUrl}/user/${userId}`);
  }
}
