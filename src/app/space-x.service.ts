import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100');
  }

  getLaunchSuccess() {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true');
  }

  getLaunchAndLandSuccess() {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true');
  }
  
}
