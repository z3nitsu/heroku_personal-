import { Component } from '@angular/core';

@Component({
  selector: 'ifff',
  template: `
  <div *ngIf="arr.length>0"> 
  <h1>There are {{arr.length}} elements in the array</h1> 
  </div>
  <div *ngIf="arr.length==0"> 
  <h1>The array has no elements</h1> 
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class IfffComponent {
  arr=[1,2,3,4,5];
}
