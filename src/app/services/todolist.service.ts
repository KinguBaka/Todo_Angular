import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

const initialList = [
  new Task("Course", true, "Acheter du blanc de Poulet" ),
  new Task("Chat", false, "Nourrir le chat!" ),
  new Task("Dormir", false, "Faire une nuit de 10h" )
]


@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  public listOfTask: Task[];

  constructor() {
    this.listOfTask = [];
    this.updateList(initialList);
  }

  async updateList(list:Task[]):Promise<void> {
    this.listOfTask = await new Promise<Task[]> (() => {
      setTimeout(() => {
        this.listOfTask = list
      }, 1000)
    })
  }

  toogleComplete(index:number) {
    this.listOfTask[index].completed = !this.listOfTask[index].completed
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

  getTaskById(taskId:any):Task {
    return this.listOfTask[taskId];
  }


}
