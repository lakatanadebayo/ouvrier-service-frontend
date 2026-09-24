import { Injectable } from '@angular/core';
import {Global} from "../../../global";
import {HttpClient} from "@angular/common/http";
import {CategorieProfession} from "../../entity/CategorieProfession";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieProfessionService {

  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  save(categorieProfession: CategorieProfession): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/categorie-profession/save", categorieProfession)
  }

  update(id: number, categorieProfession: CategorieProfession): Observable<any> {
    return this.httpClient.put(this.baseUrl+"/categorie-profession/update/"+id, categorieProfession)
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/categorie-profession/all")
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/categorie-profession/"+id)
  }

}
