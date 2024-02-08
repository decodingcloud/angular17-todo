import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: string = 'TEST';
  @Output() delete: EventEmitter<string> = new EventEmitter();

  onDelete() {
    this.delete.emit(this.todo);
  }
}
