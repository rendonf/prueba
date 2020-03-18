import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { usr } from '../usr';

@Injectable({
  providedIn: 'root'
})
export class ServiceUpdUsuarios {
  
  constructor(
    private _http:HttpClient
  ) { }
  actualizar(us:usr): Observable<usr> {
    const url='http://localhost:8080/api/usuarios/${us.id}';
    console.log(url+"     url");
    return this._http.put<usr>(url,us);
  }
}
