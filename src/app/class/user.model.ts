export class User {

  id:number;
  firstName: string;
  lastName: string;
  username: string;
  age: number;
  password: string;
  email: string;
  team: string;
  skills: string[];


  constructor(firstName:string, lastName:string,username: string, age: number, password: string, email: string, team:string, skills: string[], id:number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.age = age;
    this.password = password;
    this.email = email;
    this.team = team;
    this.skills = skills;
  }
}
