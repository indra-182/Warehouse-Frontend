import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/model/store'
@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})
export class StoreCreateComponent implements OnInit {
 
  store : Store = new Store();
  telahDiSubmit = false;
  

  constructor(private storeService:StoreService, private router:Router) { }

  ngOnInit() {
  }
  save(){
	if (this.store.storeName == null || this.store.storeName == "") {
		alert("Store name must be filled!!!");
	} else if (this.store.storePhone == null) {
		alert("Store phone must be filled!!!");
	} else {
		this.storeService.createListStore(this.store).subscribe(
			data=>{
				console.log(data);
				this.backToListStore();
			},error=>console.log(error)
		);
	}
}
  
	
	onSubmit(){
		this.telahDiSubmit=true;
			this.save();
	}

	backToListStore(){
		this.router.navigate(['store']);
	}

}

