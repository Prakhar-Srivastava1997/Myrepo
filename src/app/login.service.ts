import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './Model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL="http://localhost:8080/getUser";
  constructor(private http:HttpClient) { }

  getUser(uname:string){
    return this.http.get<User>(`${this.BASE_URL}/${uname}`);
  }

}
