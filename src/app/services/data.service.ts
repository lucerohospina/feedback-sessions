import { Injectable } from '@angular/core';
import { Employees } from '../../assets/data/data.json';
import { Data } from './../models/data';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  _url:string = 'assets/data/data.json.ts';

  constructor(private _http: HttpClient) { }

  getEmployees():Observable<Data[]> {
    return this._http.get<Data[]>(this._url);
  }
}
