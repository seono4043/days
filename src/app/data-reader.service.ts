import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {
  path = 'static/Data/data.json';
  constructor(private http:HttpClient){}

  getdata(){
    return this.http.get<any[]>(this.path)
  }
}
