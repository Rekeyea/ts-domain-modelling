import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models';
import { TodosService } from '../todos.service';

type VisualizationMode = "full" | "preview";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  public todos!: ToDo[];
  isChecked = true
  mode: VisualizationMode = "full";

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todoService.GetToDos();
  }

}
