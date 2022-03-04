import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Goods } from 'src/app/model/goods';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  goods : Observable<Goods[]>;
  constructor(private goodsService : GoodsService, private router : Router) { }

  reloadData()
  {
    this.goods = this.goodsService.getListGoods();
  }

  goToDetail(id: String)
  {
    this.router.navigate(['detail', id]);
  }

  goToEdit(id: String)
  {
    this.router.navigate(['update', id]);
  }

  deleteGoods(id: String)
  {
    this.goodsService.deleteGoods(id).subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      }, 
      error=> console.log(error)
    )
  }

  ngOnInit() {
    this.reloadData();
  }


}
