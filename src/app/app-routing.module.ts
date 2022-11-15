import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { HistoricalTodosComponent } from './historical-todos/historical-todos.component';
import { NewTodosComponent } from './new-todos/new-todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path: "list", component: TodoListComponent},
  {path: "new", component: NewTodosComponent},
  {path: "history", component: HistoricalTodosComponent},
  {path: "edit", component: EditTodoComponent},
  {path: "", redirectTo: "list", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
