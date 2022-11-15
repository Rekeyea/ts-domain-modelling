import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImportanceMap, isToDoToCreate, ToDo, ToDoToCreate } from '../models';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-new-todos',
  templateUrl: './new-todos.component.html',
  styleUrls: ['./new-todos.component.scss']
})
export class NewTodosComponent implements OnInit {
  
  public importances = this.todoService.Importances;;
  form = this.fb.group<ToDoToCreate>({
    title:'To Do',
    importance: 5,
    description: ""
  });

  constructor(
    private fb: FormBuilder, 
    private todoService: TodosService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  public async CreateTodoFromForm(){
    const todo = this.form.getRawValue();
    if(isToDoToCreate(todo)){
      await this.CreateTodo(todo);
    }else{
      console.log("Is not todo")
    }
  }

  public async CreateTodo(todo: ToDoToCreate){
    await this.todoService.CreateToDo(todo);
    this.router.navigateByUrl("/list")
  }

  public compareSelects(o1:number, o2:number){
    return o1 !== o2;
  }
}
