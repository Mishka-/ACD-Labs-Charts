import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AxisService {

  constructor(private httpClient: HttpClient) { }

  public getAxes(): Observable<any> {
    return this.httpClient.get("./assets/data.json");
  }
}
