import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPreviewComponent } from './todo-preview/todo-preview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { SideNavComponent } from './side-nav/side-nav.component';
import { HistoricalTodosComponent } from './historical-todos/historical-todos.component';
import { NewTodosComponent } from './new-todos/new-todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import { TodoFullComponent } from './todo-full/todo-full.component';
import {MatCardModule} from "@angular/material/card";
import { ImportancePipe } from './importance.pipe';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { HistoricalTodoComponent } from './historical-todo/historical-todo.component';
import { DeletedTodoComponent } from './deleted-todo/deleted-todo.component';
import { UpdatedTodoComponent } from './updated-todo/updated-todo.component';
import { CreatedTodoComponent } from './created-todo/created-todo.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    TodoPreviewComponent,
    TodoListComponent,
    SideNavComponent,
    HistoricalTodosComponent,
    NewTodosComponent,
    TodoFullComponent,
    ImportancePipe,
    EditTodoComponent,
    HistoricalTodoComponent,
    DeletedTodoComponent,
    UpdatedTodoComponent,
    CreatedTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatTabsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
