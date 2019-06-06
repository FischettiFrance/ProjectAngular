import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Monopattino } from './monopattino.model';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {

  public lat;
  public lng;
  markers : Monopattino [] ;
  public ngOnInit(): void {

  }
  constructor(public http : HttpClient){
    this.getLocation();
    this.getMonopattini();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getMonopattini(){
    this.http.get<Monopattino[]>(environment.urlServer +'/monopattini').subscribe(result=>{
      this.markers=result;
      console.log(result);
    })
  };
}
