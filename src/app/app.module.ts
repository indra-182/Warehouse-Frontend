import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GoodsCreateComponent } from './controller/goods-create/goods-create.component';
import { GoodsListComponent } from './controller/goods-list/goods-list.component';
import { GoodsUpdateComponent } from './controller/goods-update/goods-update.component';
import { GoodsDetailsComponent } from './controller/goods-details/goods-details.component';
import { WarehouseCreateComponent } from './controller/warehouse-create/warehouse-create.component';
import { WarehouseDetailsComponent } from './controller/warehouse-details/warehouse-details.component';
import { WarehouseListComponent } from './controller/warehouse-list/warehouse-list.component';
import { WarehouseUpdateComponent } from './controller/warehouse-update/warehouse-update.component';
import { StoreCreateComponent } from './controller/store-create/store-create.component';
import { StoreDetailsComponent } from './controller/store-details/store-details.component';
import { StoreListComponent } from './controller/store-list/store-list.component';
import { StoreUpdateComponent } from './controller/store-update/store-update.component';
import { SupplierCreateComponent } from './controller/supplier-create/supplier-create.component';
import { SupplierDetailsComponent } from './controller/supplier-details/supplier-details.component';
import { SupplierListComponent } from './controller/supplier-list/supplier-list.component';
import { SupplierUpdateComponent } from './controller/supplier-update/supplier-update.component';
import { GoodsWarehouseCreateComponent } from './controller/goods-warehouse-create/goods-warehouse-create.component';
import { GoodsWarehouseListComponent } from './controller/goods-warehouse-list/goods-warehouse-list.component';
import { CreateSup2wareComponent } from './controller/create-sup2ware/create-sup2ware.component';
import { CreateWare2wareComponent } from './controller/create-ware2ware/create-ware2ware.component';
import { CreateWare2storeComponent } from './controller/create-ware2store/create-ware2store.component';
import { ReportDetailsComponent } from './controller/report-details/report-details.component';
import { LoginComponent } from './controller/login/login.component';
import { DashboardComponent } from './controller/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsCreateComponent,
    GoodsListComponent,
    GoodsUpdateComponent,
    GoodsDetailsComponent,
    WarehouseCreateComponent,
    WarehouseDetailsComponent,
    WarehouseListComponent,
    WarehouseUpdateComponent,
    StoreCreateComponent,
    StoreDetailsComponent,
    StoreListComponent,
    StoreUpdateComponent,
    SupplierCreateComponent,
    SupplierDetailsComponent,
    SupplierListComponent,
    SupplierUpdateComponent,
    GoodsWarehouseCreateComponent,
    GoodsWarehouseListComponent,
    CreateSup2wareComponent,
    CreateWare2wareComponent,
    CreateWare2storeComponent,
    ReportDetailsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
