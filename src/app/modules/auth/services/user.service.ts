import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import UserDTO from "../dto/UserDTO";
import {Observable} from "rxjs/internal/Observable";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public register(dto: UserDTO): Observable<any> {
    return this.http.post(this.baseURL+'/service/register',{
      name:dto.name,
      username:dto.username,
      password:dto.password,
      mobile_number:dto.mobile_number,
      date_of_birth:dto.date_of_birth,
      gender:dto.gender,
      language:dto.language
    });
  }

  public login(dto: UserDTO): Observable<any> {
    return this.http.post(this.baseURL+'/service/login', {
      name: '',
      username:dto.username,
      password:dto.password,
      mobile_number: 0,
      date_of_birth: new Date(),
      gender: '',
      language: ''
    })
  }



}
