import { Component, OnInit } from '@angular/core';
import { GpsService } from '../services/gps.service';

@Component({
  selector: 'app-map-mvf',
  templateUrl: './map-mvf.component.html',
  styleUrls: ['./map-mvf.component.css']
})
export class MapMvfComponent implements OnInit {

  constructor(public gpsSvc: GpsService) { }

  lat: number = -33.8566542;
  long: number = 151.216084;
  
  ngOnInit() {
  	setInterval(() => {
  		this.gpsSvc.getTicks();
  	}, 5000)
  }

  toNumber(str:string) {
  	return parseFloat(str)
  }
}
