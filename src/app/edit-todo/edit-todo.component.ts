import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormModel, ImportanceEnum, ToDo, ToDoToCreate, ToDoToUpdate } from '../models';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  form!: FormModel<ToDo>
  public importances = this.todoService.Importances;
  private todoToUpdate: ToDoToUpdate = {id: 0};
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private todoService: TodosService) {
    const todo = this.router.getCurrentNavigation()?.extras.state as ToDo;
    console.log(todo)
    if(todo){
      this.todoToUpdate = {id: todo.id};
      this.form = this.fb.group(todo);
    }else{
      this.router.navigateByUrl("list");
    }
  }

  ngOnInit(): void {
    this.form.controls.description.valueChanges.subscribe(description => {
      if(this.form.controls.description.dirty){
        this.todoToUpdate = {...this.todoToUpdate, description: description ?? undefined}
      }else{
        delete this.todoToUpdate.description;
      }
    });
    this.form.controls.importance.valueChanges.subscribe(importance => {
      if(this.form.controls.importance.dirty){
        this.todoToUpdate = {...this.todoToUpdate, importance: importance ?? undefined}
      }else{
        delete this.todoToUpdate.importance;
      }
    });
    this.form.controls.title.valueChanges.subscribe(title => {
      if(this.form.controls.title.dirty){
        this.todoToUpdate = {...this.todoToUpdate, title: title ?? undefined}
      }else{
        delete this.todoToUpdate.title;
      }
    });
  }

  public compareSelects(o1:number, o2:number){
    return o1 !== o2;
  }

  public async UpdateTodoFromForm(){
    await this.UpdateTodo(this.todoToUpdate);
  }

  public async UpdateTodo(todo: ToDoToUpdate){
    await this.todoService.UpdateToDo(todo);
    this.router.navigateByUrl("/list")
  }
}
