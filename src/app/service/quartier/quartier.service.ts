import { Injectable } from '@angular/core';
import {Global} from "../../../global";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/quartier/all")
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/quartier/"+id)
  }

}
