import { Component } from '@angular/core';
import { TodolistService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count:number;
  percentage:number;

  constructor(public todoListService: TodolistService) {
    this.count = 0;
    this.percentage = 0
  }


  trackByFunction(index: number, item: any): string {
    return item.id;
  }

}
