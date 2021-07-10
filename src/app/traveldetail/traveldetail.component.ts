import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Booking } from 'src/Model/Booking';
import {BookflightService} from '../bookflight.service';

@Component({
  selector: 'app-traveldetail',
  templateUrl: './traveldetail.component.html',
  styleUrls: ['./traveldetail.component.css']
})
export class TraveldetailComponent implements OnInit {
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
    this.route.navigate(['/viewdetails']);
  }

}
