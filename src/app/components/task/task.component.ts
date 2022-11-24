import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public name : string;
  public complete:boolean ;
  public spanStyle: string;
  public liStyle: string;

  constructor() {
    this.name = "Tarik";
    this.complete = false;
    this.spanStyle ='';
    this.liStyle =''
  }

  toogleComplete() {
    this.complete = this.complete  ? false : true
  }

  getButtonText() {
    return this.complete ? "Terminer" : "Annuler"
  }

  getComplete():string | void {
    if (this.complete) {
      return this.name + ", how are you ?";
    }
  }

  getBadgeVariant():string {
    if (this.complete) {
      this.spanStyle = 'd-inline float-right badge badge-success'
    } else {
      this.spanStyle = 'd-inline float-right badge badge-warning'
    }
    return this.spanStyle;
  }

  getItemVariant():string {
    if (this.complete) {
      this.liStyle = 'list-group-item list-group-item-success'
    } else {
      this.liStyle = 'list-group-item list-group-item-warning'
    }
    return this.liStyle;
  }

  classBtn():string {
    return this.complete ? "btn btn-outline-success" : "btn btn-outline-warning"
  }

}
