import { Component } from '@angular/core';

@Component({
  selector: 'swtch1',
  template: `
  <div [ngSwitch]="course">
  <h1>
  <div *ngSwitchCase="'916'">
  BootStrap
  </div>

  <div *ngSwitchCase="'917'">
  Angular
  </div>

  <div *ngSwitchCase="'918'">
  NODEJS
  </div>
  </h1>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class Swtch1Component {
  course=916
}
