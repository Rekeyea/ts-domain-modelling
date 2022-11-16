import { Component, Input, OnInit } from '@angular/core';
import { DeletedToDo } from '../models';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrls: ['./deleted-todo.component.scss']
})
export class DeletedTodoComponent implements OnInit {

  @Input() todo!: DeletedToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
