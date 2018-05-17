import { Component, OnInit } from '@angular/core';
import { GpsService } from '../services/gps.service';

@Component({
  selector: 'app-charts-mvf',
  templateUrl: './charts-mvf.component.html',
  styleUrls: ['./charts-mvf.component.css']
})
export class ChartsMvfComponent implements OnInit {

deviceId: string = "";

  constructor(public gpsSvc: GpsService) { 

  }

  ngOnInit() {
  }

  getTickCount() {
  	if (this.gpsSvc && this.gpsSvc.gpsTicks) return this.gpsSvc.gpsTicks.length
  }

}
