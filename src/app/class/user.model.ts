export class User {
  of(arg0: (user: any) => boolean): any {
    throw new Error('Method not implemented.');
  }

  id:number;
  firstName: string;
  lastName: string;
  username: string;
  age: number;
  password: string;
  email: string;
  team: string;
  skills: string[];
  private static index: number = 0

  constructor(firstName:string, lastName:string,username: string, age: number, password: string, email: string, team:string, skills: string[]) {
    this.id = User.index++;
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
