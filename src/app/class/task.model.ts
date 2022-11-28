export class Task {
  id:number;
  title:string;
  completed:boolean;
  description:string

  constructor(id:number, title:string, completed:boolean, description:string ) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.description = description;
  }
}
