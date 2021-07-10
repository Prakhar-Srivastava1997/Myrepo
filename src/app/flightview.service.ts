import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Flight } from 'src/Model/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightviewService {
BASE_URL = "http://localhost:8080";
UPDATE_URL="http://localhost:8080/updateFlight";
  constructor(private http:HttpClient) { }

  fetchflight(){
    return this.http.get<Flight[]>(this.BASE_URL+"/getFlight", {responseType: 'json'});
  }

  updateFlight(id:string, body:Flight){
    return this.http.put<Flight>(`${this.UPDATE_URL}/${id}`, body, {responseType:'json'});
  }
}
