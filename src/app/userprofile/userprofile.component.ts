import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { User } from '../Model/user';
import {UserbookingService} from '../userbooking.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  usrname:string;
  profiledata:User;
  constructor(private route:Router, private aroute:ActivatedRoute, private ubs:UserbookingService) { }

  ngOnInit(): void {
    this.aroute.params.subscribe(params=>{
      this.usrname=params['uname'];
    })
    this.fetch();
  }

  fetch(){
    this.ubs.getUserDetail(this.usrname).subscribe(data=>{
      this.profiledata=data;
    })
  }

  back(){
    this.route.navigate(['dashBoard', this.usrname]);
  }

}
