import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent {
  taskDetails:Array<any>;

  constructor(private route: ActivatedRoute, private task: TodolistService) {
    this.taskDetails = [] ;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      this.taskDetails = this.task.getTaskById(id);
    })
  }
}
