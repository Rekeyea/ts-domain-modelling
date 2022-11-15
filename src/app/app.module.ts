import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPreviewComponent } from './todo-preview/todo-preview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
