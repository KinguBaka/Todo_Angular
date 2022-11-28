import { Component } from '@angular/core';
import { Task } from './class/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count:number;
  listTask: Task[];
  percentage:number;

  constructor() {
    this.count = 0;
    this.percentage = 0

    this.listTask = [
      new Task(1, "Course", true, "Acheter du blanc de Poulet" ),
      new Task(2, "Chat", false, "Nourrir le chat!" ),
      new Task(3, "Dormir", false, "Faire une nuit de 10h" )
    ]
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
