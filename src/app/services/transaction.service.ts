import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080'

  constructor(private http:HttpClient) { }


  supplierToWarehouse(trans:Transaction):Observable<any> {
    return this.http.post(`${this.baseUrl}/trans/supplier2warehouse`,trans, {responseType: 'text'});
  }

  warehouseToWarehouse(trans:Transaction):Observable<any> {
    return this.http.post(`${this.baseUrl}/trans/warehouse2warehouse`,trans);
  }

  warehouseToStore(trans:Transaction):Observable<any> {
    return this.http.post(`${this.baseUrl}/trans/warehouse2store`,trans, {responseType: 'text'});
  }

}