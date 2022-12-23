import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../class/user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

// const initialUser: User[] = [
//   new User("Tarik", "A", "Tarik A", 27, "azerty01", "tarik.a@gmail.com", "Softeam", ["JavaScript", "Angular"],0),
//   new User("Roi", "Baka", "Roi Baka", 27, "azerty01",  "roi.baka@gmail.com", "Pistachius", ["Flemme", "Encore Flemme"],1),
//   new User("Paco", "Shac", "Paco'Shac", 27, "azerty01",  "paco.shac@gmail.com", "La Quarantaine", ["Html", "SCSS", "JavaScript"],2)
// ]

const url = 'https://todo-angular-49e17-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listOfUser: User[];
  private _user = new BehaviorSubject<User[]>([]);
  readonly user$ = this._user.asObservable()
  // public prom!:Promise<string>;

  constructor(private http:HttpClient) {
    this.listOfUser = [];
    // this.prom = new Promise<string>((resolve) => {
    //   setTimeout(() => {
    //     this.listOfUser = initialUser;
    //     this.emitUser(this.listOfUser);
    //     resolve('fini')
    //   }, 1000)
    // })
  }

  // private emitUser(user:User[] = this.listOfUser) :void {
  //   this._user.next(Object.assign([], user))
  // }

  addUser(user: any): void {
    let newUser = new User(user.firstName, user.lastName, user.username, user.age, user.passwordForm.password, user.email, user.team, user.skills, this.checkId(this.listOfUser));
    console.log(newUser);
    this.listOfUser.push(newUser);
    this.save();
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

  save() {
    this.http.put(url + "/user.json", this.listOfUser).subscribe()
  }

  load() {
    this.http.get(url + "/user.json")
      .subscribe(data => {
        this._user.next(Object.assign(this.listOfUser, data));
      })
  }

  checkId(array: Array<any>):number {
    return array.length > 0 ? Math.max(...array.map(user => user.id)) + 1 : 0;
  }
}
