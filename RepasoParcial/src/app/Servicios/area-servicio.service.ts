import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { areas } from './areas';
@Injectable({
  providedIn: 'root'
})
export class AreaServicioService {

  constructor(private _http:HttpClient) { 
   }

   listarAreas(): Observable<areas> {
    const url='http://www.mocky.io/v2/5e712c933000006a007a34c4';
    return this._http.get<areas>(url);
  }
}