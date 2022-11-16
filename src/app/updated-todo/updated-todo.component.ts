import { Component, Input, OnInit } from '@angular/core';
import { UpdatedToDo } from '../models';

@Component({
  selector: 'app-updated-todo',
  templateUrl: './updated-todo.component.html',
  styleUrls: ['./updated-todo.component.scss']
})
export class UpdatedTodoComponent implements OnInit {
  @Input() todo!: UpdatedToDo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
