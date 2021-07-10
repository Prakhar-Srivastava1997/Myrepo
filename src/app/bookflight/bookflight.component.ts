import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/Model/Flight';
import {FlightBooking} from 'src/Model/FlightBooking';
import {BookflightService} from '../bookflight.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Booking } from 'src/Model/Booking';


@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css'],
  providers: [BookflightService]
})
export class BookflightComponent implements OnInit {
  sub:any;
  fid:string;
  flightId:string;
  fdata:Flight;
  passenger:string;
  isvalid:boolean;
  val:number;
  fobj:FlightBooking;
  pname:string;
  age:string;
  booklist:any[]=[];
  succ:boolean=false;
  travellist:Booking[]=[];
  travelobj:Booking;
  fbobj:FlightBooking;
  visible:boolean=false;
 
  constructor(private bft:BookflightService, private router:ActivatedRoute, private route:Router) { 
    this.isvalid=false;
  }

  ngOnInit(): void {
    this.sub=this.router.params.subscribe(params=>{
      this.fid=params['fid'];
    });
    this.flightId=this.fid;
    this.bft.getFlightById(this.flightId).subscribe((data:Flight)=>{
      this.fdata=data;
    })
    //alert("Session for: "+sessionStorage.getItem('passengerName'));
  }


  change(val:string){                      // This function is used to capture event change in input box
    this.passenger=val;
    if(this.passenger==""){
      this.isvalid=false;
      this.booklist=[];
    }
  }

  Book(reg:any){
    this.passenger=reg.controls.count.value;
    for(let i=0;i<+this.passenger;i++){
      this.add();
    }
    this.isvalid=true;
     }

    submit(myForm:any){
      console.warn(this.booklist);
      for(let i=0;i<this.booklist.length;i++){
        if(this.booklist[i].passengername==sessionStorage.getItem('passengerName')){
          this.pname=this.booklist[i].passengername;
          this.age=this.booklist[i].age;
          break;
        }
        else{
          continue;
        }
      }
      this.fobj=new FlightBooking();
      this.fobj.age=+this.age;
      this.fobj.flightId=this.fdata.flightId;
      this.fobj.journeyDate=this.fdata.arrivalDate;
      this.fobj.journeyTime=this.fdata.arrivalTime;
      this.fobj.passengerName=this.pname;
      this.fobj.seatsBooked=+this.passenger;

      this.bft.addBooking(this.fobj).subscribe(data=>{
        this.fbobj=data;
        for(let i=0;i<this.booklist.length;i++){
          this.travelobj=new Booking();
          this.travelobj.age=+this.booklist[i].age;
          this.travelobj.passengerName=this.booklist[i].passengername;
          this.travelobj.arrivalDate=this.fdata.arrivalDate;
          this.travelobj.arrivalTime=this.fdata.arrivalTime;
          this.travelobj.departureDate=this.fdata.departureDate;
          this.travelobj.departureTime=this.fdata.departureTime;
          this.travelobj.fare=this.fdata.fare;
          this.travelobj.flightId=this.fdata.flightId;
          this.travelobj.flightName=this.fdata.flightName;
          this.travelobj.fromCity=this.fdata.fromCity;
          this.travelobj.toCity=this.fdata.toCity;
          this.travelobj.bookingId=this.fbobj.bookingId;
          this.travellist.push(this.travelobj);
        }
        this.updateSeats();
  
        for(let result of this.travellist){
          this.bft.addTraveller(result).subscribe((data:Booking)=>{
            console.warn("Traveller data from backend :", data);
          })
        }
        this.succ=true;
        this.visible=true;
      })
  
    }
  
    add(){
      this.booklist.push({
        passengername:'',
        age:''
      })
    }

    goback(){
      this.route.navigate(['/dashBoard', sessionStorage.getItem('passengerName')]);
    }

    save(){
      this.route.navigate(['/bookconform', this.fbobj.bookingId]);
    }

    updateSeats(){
      this.bft.updateSeat(this.fdata.flightId, this.fdata).subscribe(data=>{
        alert("No of Seats available :"+data.noOfSeats);
      })
    }
    
  }


  
