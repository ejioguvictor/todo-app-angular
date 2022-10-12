import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //initializing variables
  todos: Todo[] = [];
  inputTodo: string = ''; 

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,
      },
      {
        content: 'Second Todo',
        completed: true,
      },
    ]
  }

  toggleDone(id: number): void {
    this.todos.map((value, i) => {
      if (i == id) value.completed = !value.completed;

      return value;
    })
  }

  deleteTodo(id: number): void{
    this.todos = this.todos.filter((value, i) => i != id)
  }

  addTodo():void {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = "";
  }
}
