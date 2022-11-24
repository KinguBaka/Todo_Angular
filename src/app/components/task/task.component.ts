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
    return this.complete ? "Cacher" : "Voir"
  }

  getComplete():string | void {
    if (this.complete) {
      return this.name + ", how are you ?";
    }
  }

  getBadgeVariant():string {
    if (this.complete) {
      this.spanStyle = 'd-inline float-right'
    } else {
      this.spanStyle = ''
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
    return this.complete ? "btn btn-outline-success float-end" : "btn btn-outline-warning float-end"
  }

}
