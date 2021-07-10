import { Component, OnInit } from '@angular/core';
import { FlightBooking } from 'src/Model/FlightBooking';
import {ViewdetailsService} from '../viewdetails.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  
  result:FlightBooking[]=[];
  bord:number=1;
  ses=localStorage.getItem('adminname');
  bkid:string;
  constructor(private vd:ViewdetailsService, private route:Router) { }

  ngOnInit(): void {
    this.view();
      
      
       //alert("Booking id :"+this.bkid);
  }

  view(){
    this.vd.getRecord().subscribe(data=>{
      this.result=data;
    })
  }

  delete(info:string)
  {
    this.vd.deleteRecord(info).subscribe((data)=>{
      this.view();
      this.vd.deleteTravel(info).subscribe(data=>{
        console.log("Travellers records deleted");
      })
      console.warn("Delete Status :", data);
  })
  
  }

  Back(){
this.route.navigate(['admindashboard', this.ses]);
  }

  move(data:string){
    
    this.route.navigate(['/traveldetail', data]);
  }

  
  

}
