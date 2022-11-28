import { Component } from '@angular/core';
import { TodolistService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count:number;
  listTask: any[];
  percentage:number;

  constructor(private todoListService: TodolistService) {
    this.count = 0;
    this.percentage = 0
    this.listTask = todoListService.listOfTask

  }

  setCount(nbr:number) {
    this.count += nbr;
    this.percentage = this.count/this.listTask.length*100;
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }

  ngOnInit() {
    for (let task of this.listTask) {
      if (task.completed == true) {
        this.count += 1;
      }
    }
    this.percentage = this.count/this.listTask.length*100;
  }
}
