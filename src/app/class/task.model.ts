export class Task {
  id:number;
  title:string;
  completed:boolean;
  description:string
  created:string;

  constructor(id:number, title:string, completed:boolean, description:string) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.description = description;
    this.created = Date()
  }
}
