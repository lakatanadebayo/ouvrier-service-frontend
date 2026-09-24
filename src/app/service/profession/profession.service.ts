import {Injectable} from '@angular/core';
import {Global} from "../../../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profession} from "../../entity/Profession";

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  baseUrl = Global.baseUrl;

  constructor(private httpClient : HttpClient) { }

  save(profession: Profession): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/profession/save", profession)
  }

  update(id: number, profession: Profession): Observable<any> {
    return this.httpClient.put(this.baseUrl+"/profession/update/"+id, profession)
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/profession/all")
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/profession/"+id)
  }

}
