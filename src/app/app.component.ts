import { Component, OnInit } from '@angular/core';
import { SpaceXService } from './space-x.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpaceXService]
})

export class AppComponent implements OnInit {
  spaceXData : any = [];
  spaceXFilteredData : any =[];
  launchedYear : object = [];
  fetchingSpaceXData : boolean = true;
  developer_name : string = "Surendra Sharma";

  constructor(public service: SpaceXService) {}

  ngOnInit() {
    this.getAllData();
    // this.getLaunchSuccess();
  }

  getAllData() {
    this.service.getAllData().subscribe( data => {
      console.log(data);
      this.spaceXData = this.spaceXFilteredData = data;
      this.launchedYear = this.spaceXData.filter((v,i) => this.spaceXData.findIndex(item => item.launch_year == v.launch_year) === i);
      this.fetchingSpaceXData = false;
    }, (err) => {
      this.fetchingSpaceXData = false;
    });
  }

  filterDataWithYear(year) {
    this.spaceXFilteredData = this.spaceXData.filter(t => t.launch_year === year);
  }

  filterDataWithSuccessfulLaunch(isSuccessful) {
    this.spaceXFilteredData = this.spaceXData.filter(t => t.launch_success === isSuccessful);
  }

  filterDataWithSuccessfulLanding(isSuccessful) {
    this.spaceXFilteredData = this.spaceXData.filter(t => t.upcoming === isSuccessful);
  }

}
