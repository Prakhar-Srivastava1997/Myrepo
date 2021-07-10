import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Flight} from '../Model/Flight';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  BASE_URL="http://localhost:8080";
  constructor(private http:HttpClient) { }

  fetchFlight():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.BASE_URL+"/getFlight");
  }
  
}
