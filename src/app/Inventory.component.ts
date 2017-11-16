import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component ({
  selector: 'my-app',
  template: `Inventory Content
   <br><a class = "button" (click) = "onBack()">Back to Products</a>`,
})
export class AppInventory  {

  constructor(private _router: Router){}

  onBack(): void {//Navigation
    this._router.navigate(['/Product']);
  }
}
