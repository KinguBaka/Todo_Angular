import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  constructor(public todolistService : TodolistService, public router: Router) {}


  onSubmit(taskForm: NgForm) {
    this.todolistService.addTask(taskForm.value)
    this.router.navigate(['todolist']);

  }
}
