import { Component, Input, OnInit } from '@angular/core';
import { CreatedToDo } from '../models';

@Component({
  selector: 'app-created-todo',
  templateUrl: './created-todo.component.html',
  styleUrls: ['./created-todo.component.scss']
})
export class CreatedTodoComponent implements OnInit {
  
  @Input() todo!: CreatedToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
