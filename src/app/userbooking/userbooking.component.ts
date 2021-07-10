import { Component, OnInit } from '@angular/core';
import { FlightBooking } from 'src/Model/FlightBooking';
import {UserbookingService} from '../userbooking.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewdetailsService} from '../viewdetails.service'; 

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {
  list:FlightBooking[]=[];
  username:string;
  notvalid:boolean=false;
  bkid:string;
  constructor(private ubs:UserbookingService, private root:ActivatedRoute, private route:Router, private vs:ViewdetailsService) { }

  ngOnInit(): void {
    sessionStorage.getItem('passengerName');
    this.root.params.subscribe(params=>{
      this.username = params['username'];
    })
    this.fetchPassenger();
    console.warn("Session Userbooking :", sessionStorage.getItem('passengerName'));
  }

  fetchPassenger(){
    console.warn("UserName :", this.username);
    this.ubs.getPassenger(this.username).subscribe((data:FlightBooking[])=>{
      console.warn("data from back :", data);
      /*for(let res of data){
        this.list.push(res);
      }*/
      this.list=data;

      if(this.list.length!=0){
        this.notvalid=false;
      }
      else{
        this.notvalid=true;
      }

      for(let res of this.list){
        this.bkid=res.bookingId;
        break;
      }
    })
  }

  back(){
     this.route.navigate(['dashBoard', this.username]);
  }

  delete(info:string){
    this.vs.deleteRecord(info).subscribe(data=>{
      this.fetchPassenger();
      this.vs.deleteTravel(info).subscribe(data=>{
        console.log("Travellers records deleted");
      })
    })
  
  }

  move(info:string){
    //this.route.navigate(['/bookconform', this.bkid]);
    this.route.navigate(['/bookconform', info]);
  }

}
