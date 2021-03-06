import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

   getData ():Observable<any>{
  	return this.http.get(`//storage.googleapis.com/optimcol/static/state.json`);

  }
}
