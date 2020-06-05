import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from 'src/app/_services/todoItems.service';
import { Todo } from 'src/app/_models/todo';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoItemsService,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  addTodoItem(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.todoService.addItem(result);
    });
  }

  complete(item) {
     this.todoService.complete(item);
  }

}
