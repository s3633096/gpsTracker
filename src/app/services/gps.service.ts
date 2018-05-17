import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  public deviceId: string = "";
  public gpsTicks: any = [];
  
  constructor(private httpClient:HttpClient) { }

  getTicks() {
  	let url = 'https://www.mototrack.co:3000/gps/' + this.deviceId;

  	return this.httpClient.get(url).subscribe(data => {
  		this.gpsTicks = data;
  		console.log(data)
  	})
  }

}
