import { Component, OnInit } from '@angular/core';
import {AddflightService} from '../addflight.service';
import { Flight } from 'src/Model/Flight';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  public flt:Flight;
  result=false;
  fltname="";
  fcity="";
  tcity="";
  fare:number;
  seats:number;
  adate:Date;
  ddate:Date;
  atime:Date;
  dtime:Date;
  ses=localStorage.getItem('adminname');
  constructor(private afs:AddflightService, private route:Router) { }

  ngOnInit(): void {
  }

  AddFlight(myForm:any){
    this.flt = new Flight();

    this.fltname = myForm.controls.flightname.value;
    this.fcity = myForm.controls.fcity.value;
    this.tcity = myForm.controls.tcity.value;
    this.adate = myForm.controls.adate.value;
    this.ddate = myForm.controls.ddate.value;
    this.atime = myForm.controls.atime.value;
    this.dtime = myForm.controls.dtime.value;
    this.fare = myForm.controls.fare.value;
    this.seats = myForm.controls.seats.value;

    this.flt.flightName= this.fltname;
    this.flt.fromCity= this.fcity;
    this.flt.toCity= this.tcity;
    this.flt.fare= this.fare;
    this.flt.noOfSeats= this.seats;
    this.flt.arrivalDate=this.adate;
    this.flt.departureDate=this.ddate;
    this.flt.arrivalTime=this.atime;
    this.flt.departureTime=this.dtime;

    //alert("Arrival time is :" +this.flt.arrivalTime);
    this.save();
  }

  save(){
    this.afs.addFlight(this.flt).subscribe((data:Flight)=>{
      console.warn("object data :", data);
      if(data){
        this.result=true;
      }
      else{
        this.result=false;
      }
    })
  }

  home(){
    console.warn("Session Going :", this.ses);
    if(this.ses=="admin"){
      this.route.navigate(['admindashboard', this.ses]);
    }
    else{
      this.route.navigate(['admin']);
    }
  }
}
