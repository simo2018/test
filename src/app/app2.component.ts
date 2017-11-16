import { Component } from '@angular/core';
import {ProductService} from "./products.service";
import {IProduct} from "./products";
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component ({
  selector: 'my-app2',
  templateUrl: 'app/app2.component.html',
  providers: [ProductService]
})

export class App2Component {

  appTitle1: string = 'Test directive ngIf :';
  appStatus: boolean = true;
  appTitle2: string = 'Test directive ngFor :';
  appList: any[] = [ {
    "ID": "1",
    "Name" : "One"
  },

    {
      "ID": "2",
      "Name" : "Two"
    } ];

  appTitle3: string = 'Test Data Binding :';
  appList2: any[] = [ {
    "ID": "1",
    "url": 'app/Images/one.png'
  },

    {
      "ID": "2",
      "url": 'app/Images/two.png'
    } ];

  appTitle4: string = 'Test Service http , voir console :';

  iproducts: IProduct[];
  constructor(private _product: ProductService) {
  }
  ngOnInit() : void {
    this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
  }
}
