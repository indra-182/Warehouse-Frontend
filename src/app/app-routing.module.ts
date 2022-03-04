import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './controller/goods-list/goods-list.component';
import { GoodsDetailsComponent } from './controller/goods-details/goods-details.component';
import { GoodsCreateComponent } from './controller/goods-create/goods-create.component';
import { GoodsUpdateComponent } from './controller/goods-update/goods-update.component';
import { WarehouseListComponent } from './controller/warehouse-list/warehouse-list.component';
import { WarehouseDetailsComponent } from './controller/warehouse-details/warehouse-details.component';
import { WarehouseCreateComponent } from './controller/warehouse-create/warehouse-create.component';
import { WarehouseUpdateComponent } from './controller/warehouse-update/warehouse-update.component';
import { StoreListComponent } from './controller/store-list/store-list.component';
import { StoreCreateComponent } from './controller/store-create/store-create.component';
import { StoreUpdateComponent } from './controller/store-update/store-update.component';
import { StoreDetailsComponent } from './controller/store-details/store-details.component';
import { SupplierListComponent } from './controller/supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './controller/supplier-create/supplier-create.component';
import { SupplierUpdateComponent } from './controller/supplier-update/supplier-update.component';
import { SupplierDetailsComponent } from './controller/supplier-details/supplier-details.component';
import { GoodsWarehouseCreateComponent } from './controller/goods-warehouse-create/goods-warehouse-create.component';
import { GoodsWarehouseListComponent } from './controller/goods-warehouse-list/goods-warehouse-list.component';
import { CreateSup2wareComponent } from './controller/create-sup2ware/create-sup2ware.component';
import { CreateWare2wareComponent } from './controller/create-ware2ware/create-ware2ware.component';
import { CreateWare2storeComponent } from './controller/create-ware2store/create-ware2store.component';
import { ReportDetailsComponent } from './controller/report-details/report-details.component';
import { LoginComponent } from './controller/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './controller/dashboard/dashboard.component';

const routes: Routes = [
  	{path:'', redirectTo: 'login',pathMatch:'full'},
	{path: 'login', component:LoginComponent},
	{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
	{path: 'report', component:ReportDetailsComponent, canActivate: [AuthGuard]},
  	{path:'goods', component:GoodsListComponent, canActivate: [AuthGuard]},
  	{path:'add', component:GoodsCreateComponent, canActivate: [AuthGuard]},
  	{path:'update/:id', component:GoodsUpdateComponent, canActivate: [AuthGuard]},
  	{path:'detail/:id', component:GoodsDetailsComponent, canActivate: [AuthGuard]},
  	{path:'warehouse', component:WarehouseListComponent, canActivate: [AuthGuard]},
  	{path:'addWarehouse', component:WarehouseCreateComponent, canActivate: [AuthGuard]},
  	{path: 'updateWarehouse/:id', component: WarehouseUpdateComponent, canActivate: [AuthGuard]},
  	{path: 'detailWarehouse/:id', component: WarehouseDetailsComponent, canActivate: [AuthGuard]},
  	{path:'store', component:StoreListComponent, canActivate: [AuthGuard]},
  	{path:'addStore', component:StoreCreateComponent, canActivate: [AuthGuard]},
  	{path: 'updateStore/:id', component: StoreUpdateComponent, canActivate: [AuthGuard]},
  	{path: 'detailStore/:id', component: StoreDetailsComponent, canActivate: [AuthGuard]},
	{path:'supplier', component:SupplierListComponent, canActivate: [AuthGuard]},
  	{path:'addSupplier', component:SupplierCreateComponent, canActivate: [AuthGuard]},
  	{path: 'updateSupplier/:id', component: SupplierUpdateComponent, canActivate: [AuthGuard]},
  	{path: 'detailSupplier/:id', component: SupplierDetailsComponent, canActivate: [AuthGuard]},
    {path: 'goodsWarehouse', component: GoodsWarehouseCreateComponent, canActivate: [AuthGuard]},
    {path: 'goodsWarehouseList', component: GoodsWarehouseListComponent, canActivate: [AuthGuard]},
    {path: 'sup2ware', component: CreateSup2wareComponent, canActivate: [AuthGuard]},
    {path: 'ware2ware', component: CreateWare2wareComponent, canActivate: [AuthGuard]},
    {path: 'ware2store', component: CreateWare2storeComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
