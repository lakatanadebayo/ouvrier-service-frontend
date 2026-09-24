import {Injectable} from '@angular/core';
import {Global} from "../../../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Prestation} from "../../entity/Prestation";

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  save(prestation: Prestation): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/prestation/save", prestation)
  }

  update(id: number, prestation: Prestation): Observable<any> {
    return this.httpClient.put(this.baseUrl+"/prestation/update/"+id, prestation)
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/prestation/all")
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/prestation/"+id)
  }

}
