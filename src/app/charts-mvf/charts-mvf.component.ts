import { Component, OnInit } from '@angular/core';
import { GpsService } from '../services/gps.service';

@Component({
  selector: 'app-charts-mvf',
  templateUrl: './charts-mvf.component.html',
  styleUrls: ['./charts-mvf.component.css']
})
export class ChartsMvfComponent implements OnInit {

  constructor(public gpsSvc: GpsService) { }

  ngOnInit() {
  }

}
