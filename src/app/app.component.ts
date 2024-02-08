import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoItemComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
}
