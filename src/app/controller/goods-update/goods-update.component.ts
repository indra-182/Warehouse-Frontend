import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GoodsService } from "src/app/services/goods.service";
import { Goods } from "src/app/model/goods";

@Component({
  selector: "app-goods-update",
  templateUrl: "./goods-update.component.html",
  styleUrls: ["./goods-update.component.css"],
})
export class GoodsUpdateComponent implements OnInit {
  id: String;
  goods: Goods;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private goodsService: GoodsService
  ) {}

  ngOnInit() {
    this.goods = new Goods();

    this.id = this.route.snapshot.params["id"];

    this.goodsService.findGoods(this.id).subscribe(
      (data) => {
        console.log(data);
        this.goods = data;
      },
      (error) => console.log(error)
    );
  }

  updateGoods() {
    this.goodsService.updateListGoods(this.goods).subscribe(
      (data) => {
        console.log(data);
        this.backToTheListGoods();
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.updateGoods();
  }

  backToTheListGoods() {
    this.router.navigate(['goods']);
  }
}
