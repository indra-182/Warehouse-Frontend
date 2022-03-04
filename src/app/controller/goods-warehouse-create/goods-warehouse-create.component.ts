import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from 'src/app/model/Details';
import { DetailsService } from 'src/app/services/details.service';
import { Goods } from 'src/app/model/goods';
import { GoodsService } from 'src/app/services/goods.service';
import { Warehouse } from 'src/app/model/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods-warehouse-create',
  templateUrl: './goods-warehouse-create.component.html',
  styleUrls: ['./goods-warehouse-create.component.css']
})
export class GoodsWarehouseCreateComponent implements OnInit {

  goods:Observable<Goods[]>
  warehouse:Observable<Warehouse[]>
  details:Details = new Details();


  constructor(private router: Router, private goodsService:GoodsService,private wareHouseService:WarehouseService,private detailsService:DetailsService) { }

  ngOnInit() {
    this.getGoods()
    this.getWarehouse()
  }

  getWarehouse(){
    this.wareHouseService.getListWarehouse().subscribe(
      data=>{
        this.warehouse = data
      },
      error=> console.log(error)
    )
  }

  getGoods(){
    this.goodsService.getListGoods().subscribe(
      data=>{
        this.goods = data
      },
      error=> console.log(error)
    )
  }

  back()
  {
    this.router.navigate(['goodsWarehouseList']);
  }

  save(){
    this.detailsService.createDetails(this.details).subscribe(
      data=>{
        this.goods = data;
        alert("Success")
      },
      error=> console.log(error)
    )
  }

  submit(){
    this.save();
  }

}
  
