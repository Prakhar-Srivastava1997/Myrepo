import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.warn("Session On Home :", sessionStorage.getItem('passengerName'));
  }

  home:string="AirTravels";
  para:string=`AirTravels is the most popular site for booking air tickets. 
               This is because our user interface is most user-friendly.`

  aboutus:string=`AirTravels is the most popular site for booking air tickets. 
                  This is because our user interface is most user-friendly. AirTravels
                  is serving it's various customers since years.`             
  
  aboutfd:string=`This website is created by Mr.Prakhar Srivastava. He has only few years 
                of experience in IT sector but, has significant knowledge in web development
                domain. Apart from Angular, he has knowledge about React Js and for backend
                he works on SpringBoot. `    
                
  contact:string='Contact Us-901588675'
  mail:string='Mail Us-prakhar@gmail.com'

}
