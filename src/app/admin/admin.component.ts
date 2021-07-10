import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 uname:string;
 pass:string;
 isvalid:boolean;
 notvalid:boolean;
 lstorage:boolean;
 constructor(private route:Router) {
  }

 ngOnInit(): void {
  
 }
 

 Login(regForm:any){
   this.uname=regForm.controls.username.value;
   this.pass=regForm.controls.password.value;
   if(this.uname=="admin" && this.pass=="admin@123"){
    this.isvalid=true;
    this.notvalid=false;
  }
  else{
    this.notvalid=true;
  }
  console.warn("Is Valid :", this.isvalid);
}

hello(){
  this.route.navigate(['admindashboard', this.uname]);
}
  


}
