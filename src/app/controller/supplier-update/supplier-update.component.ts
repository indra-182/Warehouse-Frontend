import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.css']
})
export class SupplierUpdateComponent implements OnInit {
  id: String;
  supplier: Supplier;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit() {
    this.supplier = new Supplier();

    this.id = this.route.snapshot.params["id"];

    this.supplierService.findSupplier(this.id).subscribe(
      (data) => {
        console.log(data);
        this.supplier = data;
      },
      (error) => console.log(error)
    );
  }

  updateSupplier() {
    this.supplierService.updateListSupplier(this.supplier).subscribe(
      (data) => {
        console.log(data);
        this.backToTheListSupplier();
      },
      (error) => console.log(error)
    );
  }
  
  onSubmit() {
    this.updateSupplier();
  }

  backToTheListSupplier() {
    this.router.navigate(['supplier']);
  }
}
