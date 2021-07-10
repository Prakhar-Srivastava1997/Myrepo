import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './Model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BASE_URL="http://localhost:8080";

  constructor(private http:HttpClient) { }

  addUser(data:User){
    return this.http.post<User>(this.BASE_URL+"/addUser", data, {responseType:'json'});
   
  }
}
