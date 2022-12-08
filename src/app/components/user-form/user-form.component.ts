import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  userForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  team: FormControl;
  skills: FormArray;

  constructor(private fb: FormBuilder, public userService: UserService, public router: Router) {

    this.firstName = this.fb.control('', [Validators.required]);
    this.lastName = this.fb.control('', [Validators.required]);
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.team = this.fb.control('', [Validators.required]);
    this.skills = this.fb.array(['']);

    this.userForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      team: this.team,
      skills : this.skills

    });
  }

  addSkill() {
    this.skills.push(this.fb.control(''))
  }

  removeSkill() {
    this.skills.removeAt(- 1)
  }

  onSubmit() {
    this.userForm.get("skills") as FormArray
    this.userService.addUser(this.userForm.value);
    this.router.navigate(['user-list']);
  }
}
