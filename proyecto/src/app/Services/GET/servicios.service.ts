import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { usr } from '../usr';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  usuarios:usr[] ;
  constructor(  
    private _http:HttpClient
  ) {
  }
  api_url: string = 'http://localhost:8080/api/usuarios'
  //https://jsonplaceholder.typicode.com/users
  listar(): Observable<usr[]> {
    const url='http://localhost:8080/api/usuarios';
    return this._http.get<usr[]>(url);
  }
}
