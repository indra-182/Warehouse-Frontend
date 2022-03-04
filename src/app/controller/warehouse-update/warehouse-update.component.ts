import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from 'src/app/model/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse-update',
  templateUrl: './warehouse-update.component.html',
  styleUrls: ['./warehouse-update.component.css']
})
export class WarehouseUpdateComponent implements OnInit {

  id: String;
  warehouse: Warehouse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService
  ) {}

  ngOnInit() {
    this.warehouse = new Warehouse();

    this.id = this.route.snapshot.params["id"];

    this.warehouseService.findWarehouse(this.id).subscribe(
      (data) => {
        console.log(data);
        this.warehouse = data;
      },
      (error) => console.log(error)
    );
  }

  updateWarehouse() {
    this.warehouseService.updateListWarehouse(this.warehouse).subscribe(
      (data) => {
        console.log(data);
        this.backToTheListWarehouse();
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.updateWarehouse();
  }

  backToTheListWarehouse() {
    this.router.navigate(["warehouse"]);
  }
}