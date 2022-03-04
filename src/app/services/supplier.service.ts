import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }

  getListSupplier():Observable<any> {
    return this.http.get(`${this.baseUrl}/supplier/get`);
  }

  createListSupplier(supplier : Supplier ):Observable<any> {
    return this.http.post(`${this.baseUrl}/supplier/create`,supplier);
  }

  updateListSupplier(supplier : Supplier):Observable<any> {
    return this.http.put(`${this.baseUrl}/supplier/update`,supplier);
  }

  deleteSupplier(id:String):Observable<any>{
    return this.http.delete(`${this.baseUrl}/supplier/delete/${id}`);
  }

  findSupplier(id:String):Observable<any>{
    return this.http.get(`${this.baseUrl}/supplier/find/${id}`);
  }
  
} 