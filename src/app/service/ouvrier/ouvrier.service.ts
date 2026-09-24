import {Injectable} from '@angular/core';
import {Global} from "../../../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ouvrier} from "../../entity/Ouvrier";
import {FindOuvrierByZone} from "../../entity/FindOuvrierByZone";

@Injectable({
  providedIn: 'root'
})
export class OuvrierService {

  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  save(ouvrier: Ouvrier): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/ouvrier/save", ouvrier)
  }

  update(id: number, ouvrier: Ouvrier): Observable<any> {
    return this.httpClient.put(this.baseUrl+"/ouvrier/update/"+id, ouvrier)
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/ouvrier/all")
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/ouvrier/"+id)
  }

  searchRequest(findOuvrierByZone: FindOuvrierByZone): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/ouvrier/zone", findOuvrierByZone)
  }

}
