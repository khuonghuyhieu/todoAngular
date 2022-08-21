import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 [class.with-border]="hiden">Wellcome My Home {{ hiden ? title : '' }}</h1>
    <button (click)="onButtonClick()">Click {{hiden ? "Hiden" : "Show"}}</button>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hiếu';
  hiden = true;
  onButtonClick() {
    this.hiden = !this.hiden;
  }
}
