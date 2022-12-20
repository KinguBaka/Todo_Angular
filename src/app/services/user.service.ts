import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../class/user.model';

const initialUser: User[] = [
  new User("Tarik", "A", "Tarik A", 27, "azerty01", "tarik.a@gmail.com", "Softeam", ["JavaScript", "Angular"]),
  new User("Roi", "Baka", "Roi Baka", 27, "azerty01",  "roi.baka@gmail.com", "Pistachius", ["Flemme", "Encore Flemme"]),
  new User("Paco", "Shac", "Paco'Shac", 27, "azerty01",  "paco.shac@gmail.com", "La Quarantaine", ["Html", "SCSS", "JavaScript"])
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
    let newUser = new User(user.firstName, user.lastName, user.username, user.age, user.password, user.email, user.team, user.skills);
    this.listOfUser.push(newUser);
    this.emitUser(this.listOfUser);
  }

  getUser():Observable<User[]> {
    return this.user$
  }

  getUserById(userId:number):User[] {
    return this.listOfUser.filter(user => user.id == userId)
  }

  checkUsernameUniqueness(str : string): boolean {
    for (let user of this.listOfUser) {
      if (user.username === str) {
        return true;
      }
    }
    return false;
  }
}
