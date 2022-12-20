import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../class/task.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// const initialList: Task[] = [
//   new Task("Course", true, "Acheter du blanc de Poulet" ),
//   new Task("Chat", false, "Nourrir le chat!" ),
//   new Task("Dormir", false, "Faire une nuit de 10h" )
// ]

const url = 'https://todo-angular-49e17-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private listOfTask: Task[];
  private _task = new BehaviorSubject<Task[]>([]);
  readonly task$ = this._task.asObservable();
  public prom!:Promise<string>;

  constructor(private http:HttpClient, private router:Router) {
    this.listOfTask = [];
    // this.prom = new Promise<string>((resolve) => {
    //   this.listOfTask = initialList;
    //   this.emiter(this.listOfTask);
    //   resolve('fini')
    // });
  }


  toogleComplete(index:number) {
    this.listOfTask[index].completed = !this.listOfTask[index].completed;
    this.emiter(this.listOfTask)
    this.save()
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
    let newTask = new Task(task.title, booleanTask, task.description, this.listOfTask.length);
    this.listOfTask.push(newTask);
    this.save();
  }

  save() {
    this.http.put(url + "/task.json", this.listOfTask).subscribe()
  }

  load() {
    this.http.get(url + "/task.json")
      .subscribe(data => {
        this._task.next(Object.assign(this.listOfTask, data));
      })
  }
}
