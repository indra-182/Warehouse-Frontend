import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  id: String;
  supplier: Supplier;

  constructor(private route: ActivatedRoute, private router: Router, private supplierService : SupplierService) { }

  backToListSupplier() {
    this.router.navigate(['supplier']);
  }

  ngOnInit() {

    this.supplier = new Supplier();

    this.id = this.route.snapshot.params['id'];

    this.supplierService.findSupplier(this.id).subscribe(
    
      data=>{
        console.log(data);
        this.supplier = data;
      }, error=>console.log(error)
    );
  }
  }