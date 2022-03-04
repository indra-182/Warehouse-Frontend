import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goods } from '../model/goods';
@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  getListGoods():Observable<any> {
    return this.http.get(`${this.baseUrl}/goods/get`);
  }

  createListGoods(goods : Goods):Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/create`,goods);
  }

  updateListGoods(goods : Goods):Observable<any> {
    return this.http.put(`${this.baseUrl}/goods/update`,goods);
  }

  deleteGoods(id:String):Observable<any>{
    return this.http.delete(`${this.baseUrl}/goods/delete/${id}`);
  }

  findGoods(id:String):Observable<any>{
    return this.http.get(`${this.baseUrl}/goods/find/${id}`);
  }
  
} 
