import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {FlightBooking} from '../Model/FlightBooking';
import {Observable} from 'rxjs';
import { Flight } from 'src/Model/Flight';
import { Booking } from 'src/Model/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookflightService {
  BASE_URL="http://localhost:8080";
  getUrl = "http://localhost:8080/getFlight";
  updateUrl="http://localhost:8080/updateSeats";
  postURL="http://localhost:8080";
  getTravelUrl="http://localhost:8080/getTravellers";
  constructor(private http:HttpClient) { }

  addBooking(data:FlightBooking){
    return this.http.post<FlightBooking>(this.BASE_URL+"/addBooking", data, {responseType: 'json'});
      
    
    }

  fetchBooking(){
    return this.http.get(this.BASE_URL+"/getBooking");
  }  

  updateSeat(data:string, body:any){
    return this.http.put<Flight>(`${this.updateUrl}/${data}`, body, {responseType:'json'});
  }

  getFlightById(data:string){
    return this.http.get<Flight>(`${this.getUrl}/${data}`, {responseType : 'json'});
  }
   
  addTraveller(data:Booking){
    return this.http.post<Booking>(this.postURL+"/addTravellers", data, {responseType:'json'});
  }

  getTraveller(data:string){
    return this.http.get<Booking[]>(`${this.getTravelUrl}/${data}`,{responseType:'json'});
  }

  }

  



