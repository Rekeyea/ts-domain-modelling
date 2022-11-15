import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from '../models';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-full',
  templateUrl: './todo-full.component.html',
  styleUrls: ['./todo-full.component.scss']
})
export class TodoFullComponent implements OnInit {

  constructor(private todoService: TodosService, private router: Router) { }

  @Input()todo!: ToDo;

  ngOnInit(): void {
  }

  async deleteTodo(todo:ToDo){
    await this.todoService.DeleteToDo(todo);
    this.router.navigateByUrl("history");
  }

  async goToEdit(todo:ToDo){
    this.router.navigateByUrl("edit", {state: todo});
  }

}
