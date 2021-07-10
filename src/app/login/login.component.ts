import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../login.service';
import {User} from '../Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
sub:any;
pass:string;
resvalid=false;
resinvalid=false;
public obj:User=new User();
  constructor(private route:Router, private root:ActivatedRoute, private lg:LoginService) { }

  ngOnInit(): void {
    
  }

  Login(regForm:any){
    this.obj.userName=regForm.controls.username.value;
    this.obj.password=regForm.controls.password.value;
    this.fetchUser();
  }

  fetchUser(){
    console.warn("User Name :", this.obj.userName);
    this.lg.getUser(this.obj.userName).subscribe((data:User)=>{
      console.warn("backend data :", data);
      if(this.obj.userName==data.userName && this.obj.password==data.password){
        this.resvalid=true;
        this.resinvalid=false;
        //this.route.navigate(['searchflight']);
      }
      else{
        this.resinvalid=true;
      }
      console.warn("ResValid :", this.resvalid);
      
    })
  }

  dashBoard(){
    this.route.navigate(['dashBoard', this.obj.userName]);
  }

}
