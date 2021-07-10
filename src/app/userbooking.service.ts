import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FlightBooking } from 'src/Model/FlightBooking';
import { User } from './Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserbookingService {
  BASE_URL = "http://localhost:8080/getPassenger";
  USER_URL = "http://localhost:8080/getUser";

  constructor(private http:HttpClient) { }

  getPassenger(username:string){
    return this.http.get<FlightBooking[]>(`${this.BASE_URL}/${username}`);
  }

  getUserDetail(username:string){
    return this.http.get<User>(`${this.USER_URL}/${username}`);
  }
}
