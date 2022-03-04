import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsService } from 'src/app/services/details.service';
import { Goods } from 'src/app/model/goods';
import { GoodsService } from 'src/app/services/goods.service';
import { Store } from 'src/app/model/store';
import { StoreService } from 'src/app/services/store.service';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Warehouse } from 'src/app/model/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-create-ware2store',
  templateUrl: './create-ware2store.component.html',
  styleUrls: ['./create-ware2store.component.css']
})
export class CreateWare2storeComponent implements OnInit {

  store: Observable<Store[]>
  goods: Observable<Goods[]>
  warehouse: Observable<Warehouse[]>
  trans: Transaction = new Transaction();


  constructor(private transactionService: TransactionService, private storeService: StoreService, private goodsService: GoodsService, private wareHouseService: WarehouseService, private detailsService: DetailsService) { }

  ngOnInit() {
    this.getGoods()
    this.getWarehouse()
    this.getStore()
  }

  getWarehouse() {
    this.wareHouseService.getListWarehouse().subscribe(
      data => {
        this.warehouse = data
      },
      error => console.log(error)
    )
  }

  getGoods() {
    this.goodsService.getListGoods().subscribe(
      data => {
        this.goods = data
      },
      error => console.log(error)
    )
  }

  getStore() {
    this.storeService.getListStore().subscribe(
      data => {
        this.store = data
      },
      error => console.log(error)
    )
  }

  save() {
    this.transactionService.warehouseToStore(this.trans).subscribe(
      data => {
        alert("Success")
      },
      error => console.log(error)
    )
  }

  submit(){
    this.save();
  }

}
