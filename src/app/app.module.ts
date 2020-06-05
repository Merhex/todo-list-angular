import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './Todo/todo.component';
import { TodoListComponent } from './Todo/todo-list/todo-list.component';
import { DoneListComponent } from './Todo/done-list/done-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateTodoComponent } from './Todo/todo-list/create-todo/create-todo.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      TodoComponent,
      TodoListComponent,
      DoneListComponent,
      CreateTodoComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatTabsModule,
      MatButtonModule,
      MatIconModule,
      NgbModule,
      MatListModule,
      MatDialogModule,
      MatInputModule,
      FormsModule
   ],
   entryComponents: [
      CreateTodoComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
