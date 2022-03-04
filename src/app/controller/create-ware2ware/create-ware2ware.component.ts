import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsService } from 'src/app/services/details.service';
import { Goods } from 'src/app/model/goods';
import { GoodsService } from 'src/app/services/goods.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { Transaction } from 'src/app/model/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Warehouse } from 'src/app/model/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-create-ware2ware',
  templateUrl: './create-ware2ware.component.html',
  styleUrls: ['./create-ware2ware.component.css']
})
export class CreateWare2wareComponent implements OnInit {

  goods: Observable<Goods[]>
  warehouse: Observable<Warehouse[]>
  trans: Transaction = new Transaction();


  constructor(private transactionService: TransactionService, private supplierService: SupplierService, private goodsService: GoodsService, private wareHouseService: WarehouseService, private detailsService: DetailsService) { }

  ngOnInit() {
    this.getGoods()
    this.getWarehouse()

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

  save() {
    this.transactionService.warehouseToWarehouse(this.trans).subscribe(
      data => {
        alert("Success")
      },
      error => console.log(error)
    )
  }

  submit() {
    this.save();
  }

}
