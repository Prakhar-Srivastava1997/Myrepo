import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Flight } from 'src/Model/Flight';

@Injectable({
  providedIn: 'root'
})
export class AddflightService {
  BASE_URL="http://localhost:8080";

  constructor(private http:HttpClient) { }

  addFlight(data:Flight){
    return this.http.post<Flight>(this.BASE_URL+"/addFlight", data, {responseType: 'json'});
  }

}
