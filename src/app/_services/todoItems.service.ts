import { Injectable } from '@angular/core';
import { Todo } from '../_models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {
  items: Todo[] = [];

constructor() { }

  addItem(description: string) {
    this.items.push({
      description,
      isDone: false
    });
  }

  complete(item: Todo) {
    const todo = this.items.find(x => x.description === item.description && !x.isDone);
    todo.isDone = true;
  }

  delete(item: Todo) {
    const todo = this.items.findIndex(x => x.description === item.description && x.isDone);
    this.items.splice(todo, 1);
  }
}
