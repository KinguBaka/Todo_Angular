import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count:number;

  public title1:string;
  public title2:string;
  public title3:string;

  public complete1:boolean;
  public complete2:boolean;
  public complete3:boolean;

  constructor() {
    this.count = 1;

    this.title1 = "Faire les courses";
    this.title2 = "Dormir";
    this.title3 = "Nourrir le chat";

    this.complete1 = true;
    this.complete2 = false;
    this.complete3 = false;
  }

  setCount(nbr:number) {
    this.count += nbr;
  }
}
