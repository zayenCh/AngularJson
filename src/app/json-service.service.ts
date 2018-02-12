import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iphotos} from './iphotos';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JsonServiceService {
  private _url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }
  getPhotos(): Observable<Iphotos[]> {
    return this.http.get<Iphotos[]>(this._url);
  }


}
