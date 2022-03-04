import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/model/store';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  id: String;
  store: Store;

  constructor(private route: ActivatedRoute, private router: Router, private storeService : StoreService) { }

  backToListStore() {
    this.router.navigate(['store']);
  }

  ngOnInit() {
    this.store = new Store();

    this.id = this.route.snapshot.params['id'];

    this.storeService.findStore(this.id).subscribe(
    
      data=>{
        console.log(data);
        this.store = data;
      }, error=>console.log(error)
    );
  }
}
