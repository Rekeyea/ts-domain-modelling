import { Component, Input, OnInit } from '@angular/core';
import { CreatedToDo, DeletedToDo, isCreatedTodo, isUpdatedTodo, OneOfTodo, UpdatedToDo } from '../models';

type type = "Create" | "Update" | "Delete";

@Component({
  selector: 'app-historical-todo',
  templateUrl: './historical-todo.component.html',
  styleUrls: ['./historical-todo.component.scss']
})
export class HistoricalTodoComponent implements OnInit {

  @Input() todo!: OneOfTodo;

  public type:type = "Create";
  public created!: CreatedToDo;
  public updated!: UpdatedToDo;
  public deleted!: DeletedToDo;

  constructor() { }

  ngOnInit(): void {
    if(isCreatedTodo(this.todo)){
      this.type = "Create";
      this.created = this.todo as CreatedToDo;
    }else if(isUpdatedTodo(this.todo)){
      this.type = "Update";
      this.updated = this.todo as UpdatedToDo;
    }else{
      this.type = "Delete";
      this.deleted = this.todo as DeletedToDo;
    }
  }

}
