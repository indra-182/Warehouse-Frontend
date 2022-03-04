import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from 'src/app/model/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.css']
})
export class WarehouseDetailsComponent implements OnInit {

	id: String;
	warehouse: Warehouse;
  
	constructor(private route: ActivatedRoute, private router: Router, private warehouseService : WarehouseService) { }
  
	backToTheListWarehouse() {
	  this.router.navigate(['warehouse']);
	}
  
	ngOnInit() {
  
	  this.warehouse = new Warehouse();
  
	  this.id = this.route.snapshot.params['id'];
  
	  this.warehouseService.findWarehouse(this.id).subscribe(
	  
		data=>{
		  console.log(data);
		  this.warehouse = data;
		}, error=>console.log(error)
	  );
	}
	}