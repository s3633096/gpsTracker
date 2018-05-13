import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-mvf',
  templateUrl: './map-mvf.component.html',
  styleUrls: ['./map-mvf.component.css']
})
export class MapMvfComponent implements OnInit {

  constructor() { }

  lat: number = 51.678418;
  long: number = 7.809007;
  
  ngOnInit() {
  }

}
