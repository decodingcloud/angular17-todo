import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  deleteTodo(todo: string) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}
