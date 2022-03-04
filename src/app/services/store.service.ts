import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../model/store';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  getListStore():Observable<any> {
    return this.http.get(`${this.baseUrl}/store/get`);
  }

  createListStore(store : Store):Observable<any> {
    return this.http.post(`${this.baseUrl}/store/create`,store);
  }

  updateListStore(store : Store):Observable<any> {
    return this.http.put(`${this.baseUrl}/store/update`,store);
  }

  deleteStore(id:String):Observable<any>{
    return this.http.delete(`${this.baseUrl}/store/delete/${id}`);
  }

  findStore(id:String):Observable<any>{
    return this.http.get(`${this.baseUrl}/store/find/${id}`);
  }
  
} 

