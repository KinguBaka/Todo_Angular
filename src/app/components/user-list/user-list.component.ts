import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/class/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  public suscribe!: Subscription | undefined;
  public user$!: Observable<User[]>;
  public listOfUser: User[] = [];

  constructor(public userService: UserService) {

  }

  getUser():void {
    this.suscribe = this.user$.subscribe(user => {
      this.listOfUser = user;
    })
  }

  ngOnInit():void {
    this.user$ = this.userService.getUser()
    this.getUser();
    this.userService.load()
  }

  ngOnDestroy(): void {
    this.suscribe?.unsubscribe();
  }
}
