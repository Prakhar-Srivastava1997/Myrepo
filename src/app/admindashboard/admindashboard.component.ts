import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  res="";
  para=`Hi Admin, here is your dashboard. You are the main administrator of this 
        web application. You are authorised to perform various operation like 
        add new flight to database and viewing all the bookings made. On the 
        right side you can see different buttons to perform various actions.`
  constructor(private route:Router, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.aroute.params.subscribe(params=>{
      this.res = params['data'];
    })
    localStorage.setItem('adminname', this.res);
  }

  add(){
    this.route.navigate(['addflight']);
  }

  view(){
    this.route.navigate(['viewdetails']);
  }

  viewflight(){
    this.route.navigate(['viewflight']);
  }

  back(){
    localStorage.removeItem('adminname');
    this.route.navigate(['']);
  }

}
