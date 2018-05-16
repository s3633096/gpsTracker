import { Component, OnInit } from '@angular/core';
import { GpsService } from '../services/gps.service';

@Component({
  selector: 'app-device-id-mvf',
  templateUrl: './device-id-mvf.component.html',
  styleUrls: ['./device-id-mvf.component.css']
})
export class DeviceIdMvfComponent implements OnInit {

  public deviceId: string;

  constructor(private gpsSvc: GpsService) { }

  ngOnInit() {
  }

  onDeviceIdChange(evt) {
  	this.gpsSvc.deviceId = evt.target.value;
  }
}
