import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
 
  supplier : Observable<Supplier[]>;
  constructor(private supplierService : SupplierService, private router : Router) { }

  reloadData()
  {
    this.supplier = this.supplierService.getListSupplier();
  }

  goToDetail(id: String)
  {
    this.router.navigate(['detailSupplier', id]);
  }

  goToEdit(id: String)
  {
    this.router.navigate(['updateSupplier', id]);
  }

  deleteSupplier(id: String)
  {
    this.supplierService.deleteSupplier(id).subscribe(
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
