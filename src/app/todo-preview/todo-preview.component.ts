import { Component, Input, OnInit } from '@angular/core';
import { ToDoPreview } from '../models';

@Component({
  selector: 'app-todo-preview',
  templateUrl: './todo-preview.component.html',
  styleUrls: ['./todo-preview.component.scss']
})
export class TodoPreviewComponent implements OnInit {

  constructor() { }
  @Input()todo!: ToDoPreview;
  ngOnInit(): void {
  }

}
