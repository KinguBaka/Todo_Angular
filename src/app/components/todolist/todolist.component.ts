import { Component } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
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
