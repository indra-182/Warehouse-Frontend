import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Warehouse } from 'src/app/model/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

	warehouse : Observable<Warehouse[]>;
	constructor(private warehouseService : WarehouseService, private router : Router) { }
  
	reloadData()
	{
	  this.warehouse = this.warehouseService.getListWarehouse();
	}
  
	goToDetail(id: String)
	{
	  this.router.navigate(['detailWarehouse', id]);
	}
  
	goToEdit(id: String)
	{
	  this.router.navigate(['updateWarehouse', id]);
	}
  
	deleteWarehouse(id: String)
	{
	  this.warehouseService.deleteWarehouse(id).subscribe(
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