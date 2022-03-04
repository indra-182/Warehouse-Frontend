import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoodsService } from 'src/app/services/goods.service';
import { Goods } from 'src/app/model/goods';

@Component({
	selector: 'app-goods-create',
	templateUrl: './goods-create.component.html',
	styleUrls: ['./goods-create.component.css']
})
export class GoodsCreateComponent implements OnInit {

	goods: Goods = new Goods();
	telahDiSubmit = false;

	constructor(private goodsService: GoodsService, private router: Router) { }

	ngOnInit() {
	}

	save() {
		if (this.goods.goodsCode == null || this.goods.goodsCode == "") {
			alert("Goods code must be filled!!!");
		} else if (this.goods.goodsName == null) {
			alert("Goods name must be filled!!!");
		} else if (this.goods.goodsName == null) {
			alert("Goods name must be filled!!!");
		} else if (this.goods.goodsPrice == null) {
			alert("Goods price must be filled!!!");
		} else {
			this.goodsService.createListGoods(this.goods).subscribe(
				data => {
					console.log(data);
					this.backToListGoods();
				}, error => console.log(error)
			);
		}
	}

	onSubmit() {
		this.telahDiSubmit = true;
		this.save();
	}

	backToListGoods() {
		this.router.navigate(['goods']);
	}

}
