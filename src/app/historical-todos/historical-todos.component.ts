import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-historical-todos',
  templateUrl: './historical-todos.component.html',
  styleUrls: ['./historical-todos.component.scss']
})
export class HistoricalTodosComponent implements OnInit {

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

  public todos = this.todoService.All();
  public created = this.todoService.Created();
  public updated = this.todoService.Updated();
  public deleted = this.todoService.Deleted();

}
