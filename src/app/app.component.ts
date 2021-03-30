import { Component } from '@angular/core';
import * as nerdamer from 'nerdamer/all';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nerdamer-demo';

  constructor() {
    //--Evaluation----evaluate()------------------------------------------------------------------------------------
    console.log(nerdamer('x^2', { x: '2' }).evaluate().text('fractions'));
    //--Differentiation----diff()------------------------------------------------------------------------------------
    console.log(nerdamer('diff(x^2,x)').text('fractions'));
    //--integration----integrate()------------------------------------------------------------------------------------
    console.log(nerdamer('integrate(x^2,x)').text('fractions'));
  }
}
