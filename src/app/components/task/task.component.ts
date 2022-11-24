import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() complete:boolean | undefined ;
  @Input() title:string | undefined
  @Output() count = new EventEmitter<number>()
  public modif:boolean;

  constructor() {
    this.modif = false;
  }

  // Set the Status on true | false
  toogleComplete() {
    this.complete? this.count.emit(-1) : this.count.emit(1);
    this.complete = !this.complete
  }

  // Change value of Btn
  getButtonText():string {
    return this.complete ? "Annuler" : "Fait"
  }

  // Change color Btn
  classBtn():string {
    return this.complete ? "btn btn-danger" : "btn btn-success"
  }

  // Change color badge
  setBadgeClass():string {
    return this.complete ? "bg-success" : "bg-danger"
  }

  // Change value of badge
  setBadge():string {
    return this.complete ? "Fait" : "A faire"
  }

  // Change class Card (scss)
  classCard():string {
    return this.complete ? "finish" : "notFinish"
  }

  // Set the status of modif
  setModif() {
    this.modif = !this.modif;
  }
}
