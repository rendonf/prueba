import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { usr } from '../usr';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAllUsuarios {
  usuarios:usr[] ;
  constructor(  
    private _http:HttpClient
  ) {
  }
 
  listar(): Observable<usr[]> {
    const url='http://localhost:8080/api/usuarios';
    return this._http.get<usr[]>(url);
  }
}
