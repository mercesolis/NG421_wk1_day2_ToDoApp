import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: any[] = [];

  ngOnInit(): void {
    this.todoList = [
      { title: 'Install Angular CLI', isDone: false}
    ];
  }

  deleteTodo(todo: any): void {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
