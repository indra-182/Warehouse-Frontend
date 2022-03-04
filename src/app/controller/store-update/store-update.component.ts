import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/model/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-update',
  templateUrl: './store-update.component.html',
  styleUrls: ['./store-update.component.css']
})
export class StoreUpdateComponent implements OnInit {
  id: String;
  store: Store;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.store = new Store();

    this.id = this.route.snapshot.params["id"];

    this.storeService.findStore(this.id).subscribe(
      (data) => {
        console.log(data);
        this.store = data;
      },
      (error) => console.log(error)
    );
  }

  updateStore() {
    this.storeService.updateListStore(this.store).subscribe(
      (data) => {
        console.log(data);
        this.backToTheListStore();
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.updateStore();
  }

  backToTheListStore() {
    this.router.navigate(["store"]);
  }
}
