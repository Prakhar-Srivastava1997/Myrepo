import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FlightBooking } from 'src/Model/FlightBooking';

@Injectable({
  providedIn: 'root'
})
export class ViewdetailsService {
  BASE_URL ="http://localhost:8080";
  DELETE_URL="http://localhost:8080/deleteBooking";
  FARE_URL="http://localhost:8080/getFare";
  DELETE_TRAVEL="http://localhost:8080/deleteTravellers";
  constructor(private http:HttpClient) { }

  getRecord(){
    return this.http.get<FlightBooking[]>(this.BASE_URL+"/getBooking");
  }

  deleteRecord(data:string){
    return this.http.delete(`${this.DELETE_URL}/${data}`, {responseType:'text'});
  }

  deleteTravel(info:string){
    return this.http.delete(`${this.DELETE_TRAVEL}/${info}`, {responseType:'text'});
  }
}
