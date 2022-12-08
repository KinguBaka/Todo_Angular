import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../class/task.model';

const initialList: Task[] = [
  new Task("Course", true, "Acheter du blanc de Poulet" ),
  new Task("Chat", false, "Nourrir le chat!" ),
  new Task("Dormir", false, "Faire une nuit de 10h" )
]



@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private listOfTask: Task[];
  private _task = new BehaviorSubject<Task[]>([]);
  readonly task$ = this._task.asObservable();
  public prom!:Promise<string>;

  constructor() {
    this.listOfTask = [];
    this.prom = new Promise<string>((resolve) => {
      setTimeout(() => {
        this.listOfTask = initialList;
        this.emiter(this.listOfTask);
        resolve('fini')
      }, 1000)
    })
  }

  toogleComplete(index:number) {
    this.listOfTask[index].completed = !this.listOfTask[index].completed;
    this.emiter(this.listOfTask)
  }

  get setCount(): number {
    let count:number = 0;
    for (let list of this.listOfTask) {
      if (list.completed) {
        count++
      }
    }
    return count;
  }

  get setPercentage(): number {
    let percentage:number = this.setCount/this.listOfTask.length*100;
    return percentage;
  }

  getTaskById(taskId:number):Task[] {
    return this.listOfTask.filter(task => task.id == taskId)
  }

  getTask():Observable<Task[]> {
    return this.task$;
  }

  private emiter(task: Task[] = this.listOfTask):void {
    this._task.next(Object.assign([], task))
  }

  addTask(task: any): void {
    let booleanTask = task.completed == "true" ? true : false
    let newTask = new Task(task.title, booleanTask, task.description);
    this.listOfTask.push(newTask);
    this.emiter(this.listOfTask);
  }

}
