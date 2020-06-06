import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message: string;
  todos: Todo[]
  // [
  //   new Todo( 1, 'Arsenal F.C.', false, new Date()),
  //   new Todo( 2, 'F.C. Barcelona', false, new Date()),
  //   new Todo( 3, 'A.C. Milan', false, new Date())
  // ]

  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }

  deleteTodo(id){
    //console.log(`Delete Test ${id}`);
    this.todoService.deleteTodo('navonil',id).subscribe(
      response => {
        console.log(response);
        this.message = `ID - ${id} deleted successfully!`;
        this.refreshTodo();
      }
    )
  }

  updateTodo(id){
    console.log(`Update Test ${id}`);
    this.router.navigate(['todos',id]);
  }

  ngOnInit() {
    this.refreshTodo();
  }

  refreshTodo(){
    this.todoService.retriveAllTodos('navonil').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
