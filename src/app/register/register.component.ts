import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../register.service';
import {User} from '../Model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  result:boolean=false;
  public obj:User=new User();
  valid=false;
  constructor(private route:Router, private reg:RegisterService) { }

  ngOnInit(): void {
  }

  Register(regForm:any){
    this.obj.userName=regForm.controls.username.value;
    this.obj.age=regForm.controls.age.value;
    this.obj.emailId=regForm.controls.email.value;
    this.obj.password=regForm.controls.password.value;
    console.warn("Object :", this.obj);
    this.addUser();
  }

  addUser()
  { 
   this.reg.addUser(this.obj).subscribe((data:User)=>{
     this.result=true;
     this.valid=true;
   })
  }

  hello(){
    this.route.navigate(['login']);
  }

  

}
