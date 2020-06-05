import { Component, OnInit } from '@angular/core';
import { TodoItemsService } from 'src/app/_services/todoItems.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  constructor(public todoService: TodoItemsService) { }

  ngOnInit() {
  }

  delete(item) {
    this.todoService.delete(item);
  }
}
