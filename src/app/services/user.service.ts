import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../class/user.model';

const initialUser: User[] = [
  new User("Tarik", "A", "tarik.a@gmail.com", "Softeam", ["JavaScript", "Angular"]),
  new User("Roi", "Baka", "roi.baka@gmail.com", "Pistachius", ["Flemme", "Encore Flemme"]),
  new User("Paco", "Shac", "paco.shac@gmail.com", "La Quarantaine", ["Html", "SCSS", "JavaScript"])
]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listOfUser: User[];
  private _user = new BehaviorSubject<User[]>([]);
  readonly user$ = this._user.asObservable()
  public prom!:Promise<string>;

  constructor() {
    this.listOfUser = [];
    this.prom = new Promise<string>((resolve) => {
      setTimeout(() => {
        this.listOfUser = initialUser;
        this.emitUser(this.listOfUser);
        resolve('fini')
      }, 1000)
    })
  }

  private emitUser(user:User[] = this.listOfUser) :void {
    this._user.next(Object.assign([], user))
  }

  addUser(user: any): void {
    let newUser = new User(user.firstName, user.lastName, user.email, user.team, user.skills);
    this.listOfUser.push(newUser);
    this.emitUser(this.listOfUser);
  }

  getUser():Observable<User[]> {
    return this.user$
  }

  getUserById(userId:number):User[] {
    return this.listOfUser.filter(user => user.id == userId)
  }
}
