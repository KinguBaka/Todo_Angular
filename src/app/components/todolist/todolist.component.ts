import { Component , OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit, OnDestroy {
  public count:number;
  percentage:number;
  public suscribe!: Subscription | undefined;
  public task$!: Observable<Task[]>;
  public listOfTask: Task[] = []

  constructor(public todoListService: TodolistService) {
    this.count = 0;
    this.percentage = 0
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }

  getTask():void {
    this.suscribe = this.task$.subscribe(task => {
      this.listOfTask = task;
    })
  }

  ngOnInit():void {
    this.task$ = this.todoListService.getTask();
    this.getTask();
  }

  ngOnDestroy(): void {
    this.suscribe?.unsubscribe();
  }
}
