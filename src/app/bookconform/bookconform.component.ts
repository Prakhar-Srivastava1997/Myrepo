import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Booking } from 'src/Model/Booking';
import {BookflightService} from '../bookflight.service';

@Component({
  selector: 'app-bookconform',
  templateUrl: './bookconform.component.html',
  styleUrls: ['./bookconform.component.css']
})
export class BookconformComponent implements OnInit {

  sub:string;
  travellist:Booking[]=[];
  constructor(private route:Router, private aroute:ActivatedRoute, private bft:BookflightService) { }

  ngOnInit(): void {
    this.aroute.params.subscribe(params=>{
      this.sub=params['bkid'];
    })
    this.bft.getTraveller(this.sub).subscribe(data=>{
      this.travellist=data;
    })
  }

  back(){
    this.route.navigate(['/dashBoard', sessionStorage.getItem('passengerName')]);
  }

}
