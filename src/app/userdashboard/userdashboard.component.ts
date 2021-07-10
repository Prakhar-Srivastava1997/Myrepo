import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  usrname:string;

  constructor(private route:Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.aroute.params.subscribe(params=>{
      this.usrname=params['uname'];
    })
    sessionStorage.setItem('passengerName', this.usrname);
    console.warn("Session Set for :", sessionStorage.getItem('passengerName'));
  }

  search(){
    this.route.navigate(['searchflight']);
  }

  view(){
    this.route.navigate(['userbooking', this.usrname]);
  }

  profile(){
    this.route.navigate(['userprofile', this.usrname]);
  }

  back(){
    sessionStorage.removeItem('passengerName');
    this.route.navigate(['']); 
  }


}
