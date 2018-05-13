import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tracker-mvf',
  templateUrl: './tracker-mvf.component.html',
  styleUrls: ['./tracker-mvf.component.css']
})
export class TrackerMvfComponent implements OnInit {

  constructor(public httpClient: HttpClient) {

  }

  public state = {
  	deviceId: null,
  	lat: null,
  	long: null,
  	stolen: false,
  	isTracking: false,
  	trackProcHandle: null
  }

  ngOnInit() {
  }

  onDeviceIdChange(evt) {
  	this.state.deviceId = evt.target.value;
  }

  getDevicePosition() {
  	debugger;
  	navigator.geolocation.getCurrentPosition((pos) => {
  		this.state.lat = pos.coords.latitude;
  		this.state.long = pos.coords.longitude;
  		this.postPosition();
	});
  }

  startTracking() {
  	this.state.trackProcHandle = setInterval(() => {
  		this.getDevicePosition();

  	}, 5000)
  }

  stopTracking() {
	clearInterval(this.state.trackProcHandle);
  }

  postPosition() {
  	let url = 'https://13.211.168.169:3000/gps';
  	let body = {
  		latitude: this.state.lat,
  		longitude: this.state.long,
  		isStolen: this.state.stolen,
  	}

  	this.httpClient.post(url, body).subscribe(data => {
  		debugger;
  	})

  }

}
