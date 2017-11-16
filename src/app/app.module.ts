import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {App2Component} from "./app2.component";
import {HttpModule} from "@angular/http";
import {RouterModule,Routes} from "@angular/router";
import {Appproduct} from "./product.component";
import {AppInventory} from "./Inventory.component";
import {ProductFormComponent} from "./product-form.component";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'Product', component: Appproduct },
  { path: 'Inventory', component: AppInventory },
];

@NgModule({
  //The BrowserModule is required by default for any web based angular application.
  //ex you will have access to ngif and ngFor
  imports:      [ BrowserModule,FormsModule,HttpModule ,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,App2Component,Appproduct,AppInventory,ProductFormComponent ],
  bootstrap:    [ AppComponent ]//The bootstrap option tells Angular which Component to bootstrap in the application.
})
export class AppModule { }
