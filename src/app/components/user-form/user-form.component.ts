import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, map, Observable, of} from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  passwordForm: FormGroup;
  userForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  age: FormControl;
  username: FormControl;
  password: FormControl;
  confirm: FormControl;
  email: FormControl;
  team: FormControl;
  skills: FormArray;

  passwordStrength:string;

  static passwordMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return password === confirm ? null : {matchingError : true};
  }

  constructor(private fb: FormBuilder, public userService: UserService, public router: Router) {
    this.passwordStrength = "";

    this.firstName = this.fb.control('', {validators:[Validators.required, Validators.minLength(2), Validators.maxLength(12)], updateOn: 'blur'});
    this.lastName = this.fb.control('', {validators:[Validators.required, Validators.minLength(2), Validators.maxLength(12)], updateOn: 'blur'});
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.age = this.fb.control('', {validators:[Validators.required, Validators.pattern(/^(1[8-9]|[2-9][0-9])$/)], updateOn: 'blur'});
    this.username = this.fb.control('', [Validators.required, this.checkUsernameUniqueness.bind(this)]);
    this.password = this.fb.control('', [Validators.required]);
    this.confirm = this.fb.control('', [Validators.required]);
    this.team = this.fb.control('', [Validators.required]);
    this.skills = this.fb.array(['']);

    this.passwordForm = this.fb.group({
      password: this.password,
      confirm: this.confirm
    }, {
      validator: UserFormComponent.passwordMatch
    })

    this.userForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age,
      username: this.username,
      passwordForm: this.passwordForm,
      team: this.team,
      skills : this.skills

    });
  }

  ngOnInit():void{
    this.userService.load();
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

  checkPasswordStrength() {
    // Get the password value from the FormGroup
    const password = this.passwordForm.get('password')?.value;

    // Check the password strength
    if (password.length < 8) {
      this.passwordStrength = 'weak';
    } else if (password.length >= 8 && password.length < 12) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'strong';
    }
  }

  checkUsernameUniqueness(control: FormControl) {
    const username = control.value;
    return this.userService.checkUsernameUniqueness(username)? { usernameTaken : true} : null
  }
}
