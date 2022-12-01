import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: any;
  public modif:boolean;

  constructor(public todolistservice : TodolistService) {
    this.modif = false;

  }

  // Set the Status on true | false
  toogleComplete() {
    this.todolistservice.toogleComplete(this.task.id)
  }

  // Change value of Btn
  getButtonText():string {
    return this.task.completed ? "Annuler" : "Fait"
  }

  // Change color Btn
  classBtn():string {
    return this.task.completed ? "btn btn-danger" : "btn btn-success"
  }

  // Change color badge
  setBadgeClass():string {
    return this.task.completed ? "bg-success" : "bg-danger"
  }

  // Change value of badge
  setBadge():string {
    return this.task.completed ? "Fait" : "A faire"
  }

  // Change class Card (scss)
  classCard():string {
    return this.task.completed ? "finish" : "notFinish"
  }

  // Set the status of modif
  setModif() {
    this.modif = !this.modif;
  }

}
