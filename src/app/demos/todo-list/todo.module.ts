import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TasksService } from './todo.service';

import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { Store } from './todo.store';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    TasksService,
    Store
  ],
  declarations: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    ToDoListComponent,
    TasksComponent
  ],
  exports: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TasksComponent,
    ToDoListComponent
  ]
})
export class TodoModule {}