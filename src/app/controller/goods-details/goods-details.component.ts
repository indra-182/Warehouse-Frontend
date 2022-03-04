import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoodsService } from 'src/app/services/goods.service';
import { Goods } from 'src/app/model/goods';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {

  id: String;
  goods: Goods;

  constructor(private route: ActivatedRoute, private router: Router, private goodsService : GoodsService) { }

  backToListGoods() {
    this.router.navigate(['goods']);
  }

  ngOnInit() {

    this.goods = new Goods();

    this.id = this.route.snapshot.params['id'];

    this.goodsService.findGoods(this.id).subscribe(
    
      data=>{
        console.log(data);
        this.goods = data;
      }, error=>console.log(error)
    );
  }
  }

