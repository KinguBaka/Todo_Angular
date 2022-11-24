import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public complete:boolean ;
  public modif:boolean;
  public title:string;

  constructor() {
    this.complete = false;
    this.modif = false;
    this.title = "Bonjour";
  }

  // Set the Status on true | false
  toogleComplete() {
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
