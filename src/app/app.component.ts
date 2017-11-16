import { Component } from '@angular/core';
//<router-outlet></router-outlet> is the placeholder to render the component based on which option the user chooses
@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
  <ul>
      <li><a [routerLink] = "['/Product']">Product</a></li>
      <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
   </ul>
   <router-outlet></router-outlet>
   <h1>Test Form:</h1>
   <product-form></product-form>
   <my-app2>Loading app 2  ...</my-app2>`,
})
export class AppComponent  { name = 'Test Routing :'; }
