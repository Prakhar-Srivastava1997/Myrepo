import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/Model/Flight';
import {FlightviewService} from '../flightview.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  fltdata:Flight[]=[];
  res=localStorage.getItem('adminname');
  constructor(private fv:FlightviewService, private route:Router) { }

  ngOnInit(): void {
    this.fv.fetchflight().subscribe((data:Flight[])=>{
      for(let res of data){
        this.fltdata.push(res);
      }
    })
  }

  back(){
    if(this.res=="admin"){
      this.route.navigate(['admindashboard', this.res]);
    }
    else{
      this.route.navigate(['admin']);
    }
  }

  update(data:any){
    this.route.navigate(['updateflight', data]);
  }



}
