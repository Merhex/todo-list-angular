import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from '../_services/todoItems.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoItemsService) { }

  ngOnInit() {
    this.todoService.items = [
      { description: 'Test', isDone: false }
    ];
  }

}
