import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http:HttpClient) { }

  postData(data:any) : Observable<any> {
    return this.http.post(`${baseUrl}api/login`, data);
  }
}
