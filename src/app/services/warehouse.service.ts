import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from 'src/app/model/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  getListWarehouse():Observable<any> {
    return this.http.get(`${this.baseUrl}/warehouse/get`);
  }

  createListWarehouse(warehouse : Warehouse):Observable<any> {
    return this.http.post(`${this.baseUrl}/warehouse/create`,warehouse);
  }

  updateListWarehouse(warehouse: Warehouse):Observable<any> {
    return this.http.put(`${this.baseUrl}/warehouse/update`,warehouse);
  }

  deleteWarehouse(id:String):Observable<any>{
    return this.http.delete(`${this.baseUrl}/warehouse/delete/${id}`);
  }

  findWarehouse(id:String):Observable<any>{
    return this.http.get(`${this.baseUrl}/warehouse/find/${id}`);
  }
  
} 
