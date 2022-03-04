import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../model/Details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }


  createDetails(details:Details):Observable<any> {
    return this.http.post(`${this.baseUrl}/details/create`,details);
  }

  findAll():Observable<any> {
    return this.http.get(`${this.baseUrl}/details/get`);
  }
}
