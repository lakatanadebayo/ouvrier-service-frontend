import { Injectable } from '@angular/core';
import {Global} from "../../../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/departement/all")
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/departement/"+id)
  }

}
