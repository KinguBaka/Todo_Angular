import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodolistService } from 'src/app/services/todolist.service';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent {
  taskDetails:Array<any>;

  constructor(private route: ActivatedRoute, private task: TodolistService) {
    this.taskDetails = [];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskDetails.push(this.task.getTaskById(id));
  }
}
