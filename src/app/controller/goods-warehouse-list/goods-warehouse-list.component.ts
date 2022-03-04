import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsService } from 'src/app/services/details.service';
import { DetailsTable } from 'src/app/model/DetailsTable';

@Component({
  selector: 'app-goods-warehouse-list',
  templateUrl: './goods-warehouse-list.component.html',
  styleUrls: ['./goods-warehouse-list.component.css']
})
export class GoodsWarehouseListComponent implements OnInit {

  details:Observable<DetailsTable[]>

  constructor(private service:DetailsService) { }

  ngOnInit() {
    this.getlist()
  }

  getlist(){
    this.details=this.service.findAll();
  }

}
