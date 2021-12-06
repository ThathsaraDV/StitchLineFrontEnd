import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import ProgramDTO from "../dto/ProgramDTO";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  public saveProgram(dto: ProgramDTO): Observable<any> {

    let token = this.cookieService.get("userToken");

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: token
      })
    };

    return this.http.post(this.baseURL+'/content/programs/create' ,{
      pid:dto.pid,
      name:dto.name,
      description:dto.description,
      start_date:dto.start_date,
      end_date:dto.end_date,
    },httpOptions);
  }


  public updateProgram(dto: ProgramDTO): Observable<any> {

    let token = this.cookieService.get("userToken");

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: token
      })
    };

    return this.http.post(this.baseURL+'/content/programs/update',{
      pid:dto.pid,
      name:dto.name,
      description:dto.description,
      start_date:dto.start_date,
      end_date:dto.end_date,
    },httpOptions);
  }

}
