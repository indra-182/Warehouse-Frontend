import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {

	supplier: Supplier = new Supplier();
	telahDiSubmit = false;
	
  constructor(private supplierService:SupplierService, private router:Router) { }

  ngOnInit() {
  }
	
	save(){
		if (this.supplier.supplierName == null || this.supplier.supplierName == "") {
			alert("Supplier name must be filled!!!");
		} else if (this.supplier.supplierPhone == null) {
			alert("Supplier phone must be filled!!!");
		} else {
		this.supplierService.createListSupplier(this.supplier).subscribe(
			data=>{
				console.log(data);
				this.backToListSupplier();
			},error=>console.log(error)
		);
	}
}
	
	onSubmit(){
		this.telahDiSubmit=true;
			this.save();
	}

	backToListSupplier(){
		this.router.navigate(['supplier']);
	}

}
