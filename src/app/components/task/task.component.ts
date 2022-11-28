import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: any;
  @Output() count = new EventEmitter<number>();
  public modif:boolean;

  constructor() {
    this.modif = false;
  }

  // Set the Status on true | false
  toogleComplete() {
    this.task.completed? this.count.emit(-1) : this.count.emit(1);
    this.task.completed = !this.task.completed
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
