import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  listOfTask: Task[];

  constructor() {
    this.listOfTask = [
      new Task(1, "Course", true, "Acheter du blanc de Poulet" ),
      new Task(2, "Chat", false, "Nourrir le chat!" ),
      new Task(3, "Dormir", false, "Faire une nuit de 10h" )
    ]
   }
}
