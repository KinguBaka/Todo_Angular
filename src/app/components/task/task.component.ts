import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public complete:boolean ;

  constructor() {
    this.complete = false;
  }

  toogleComplete() {
    this.complete = !this.complete
  }

  getButtonText() {
    return this.complete ? "Annuler" : "Fait"
  }

  classBtn():string {
    return this.complete ? "btn btn-danger" : "btn btn-success"
  }

  setBadgeClass():string {
    return this.complete ? "bg-success" : "bg-danger"
  }

  setBadge():string {
    return this.complete ? "Fait" : "A faire"
  }

  classCard():string {
    return this.complete ? "finish" : "notFinish"
  }
}
