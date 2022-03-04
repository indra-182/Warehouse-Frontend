import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/model/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
	selector: 'app-warehouse-create',
	templateUrl: './warehouse-create.component.html',
	styleUrls: ['./warehouse-create.component.css']
})
export class WarehouseCreateComponent implements OnInit {

	warehouse: Warehouse = new Warehouse();
	telahDiSubmit = false;

	constructor(private warehouseService: WarehouseService, private router: Router) { }

	ngOnInit() {
	}

	save() {
		if (this.warehouse.warehouseName == null || this.warehouse.warehouseName == "") {
			alert("warehouse name must be filled!!!");
		} else if (this.warehouse.warehouseAddress == null || this.warehouse.warehouseAddress == "") {
			alert("warehouse address must be filled!!!");
		} else if (this.warehouse.warehousePhone == null) {
			alert("warehouse Phone must be filled");
		} else {
			this.warehouseService.createListWarehouse(this.warehouse).subscribe(
				data => {
					console.log(data);
					this.backToListWarehouse();
				}, error => console.log(error)
			);
		}

	}



	onSubmit() {
		this.telahDiSubmit = true;
		this.save();
	}

	backToListWarehouse() {
		this.router.navigate(['warehouse']);
	}

}