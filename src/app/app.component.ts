import {Component, OnInit} from '@angular/core';
import {JsonServiceService} from './json-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public data = [];
  ngOnInit() {
    this.myservice.getPhotos().subscribe(data => this.data = data);
  }
  constructor(private  myservice: JsonServiceService) {}


}
