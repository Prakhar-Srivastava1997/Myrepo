import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import {Flight} from 'src/Model/Flight';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  flightdata:Flight[]=[];
  display:Flight[]=[];
  isValid:boolean=false;
  sry:boolean;
  fid:string;
  dot:Date;
  constructor(private srch:SearchService, private router:Router) {
   }

  ngOnInit(): void {
     this.getData();
  }

  Search(regForm:any)
  {
    var fromcity=regForm.controls.fcity.value;   //way of fetching form data and storing in a variable.
    var tocity=regForm.controls.tcity.value;
    this.dot = regForm.controls.dot.value;
    for(let res of this.flightdata)
    {
      if(res.fromCity==fromcity && res.toCity==tocity && res.arrivalDate==this.dot)
      {
        this.isValid=true;
        this.display.push(res);
        this.sry=false;
        this.fid=res.flightId;
        break;
      }
      else{
        this.sry=true;
      }
    }
    console.warn("Final value of Sorry:", this.sry);
    
  }
  
  getData()
  {
    this.srch.fetchFlight().subscribe(data=>this.flightdata=data);
  }

   Book(){
     this.router.navigate(['/bookflight', this.fid]);
   }


}
