import { Component } from '@angular/core';
import { Task } from './class/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count:number;
  task1:object;
  task2:object;
  task3:object;
  listTask:Array<any>;

  constructor() {
    this.count = 1;

    this.task1 = new Task(1, "Course", true, "Acheter du blanc de Poulet" );
    this.task2 = new Task(2, "Chat", false, "Nourrir le chat!" );
    this.task3 = new Task(3, "Dormir", false, "Faire une nuit de 10h" );

    this.listTask = [
      this.task1, this.task2, this.task3
    ]
  }

  setCount(nbr:number) {
    this.count += nbr;
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
}
