import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from 'src/app/model/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  store : Observable<Store[]>;
  constructor(private storeService : StoreService, private router : Router) { }

  reloadData()
  {
    this.store = this.storeService.getListStore();
  }

  goToDetail(id: String)
  {
    this.router.navigate(['detailStore', id]);
  }

  goToEdit(id: String)
  {
    this.router.navigate(['updateStore', id]);
  }

  deleteStore(id: String)
  {
    this.storeService.deleteStore(id).subscribe(
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
