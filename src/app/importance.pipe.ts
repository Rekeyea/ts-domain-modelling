import { Pipe, PipeTransform } from '@angular/core';
import { TodosService } from './todos.service';
import {ImportanceEnum} from "./models";

@Pipe({
  name: 'importance'
})
export class ImportancePipe implements PipeTransform {

  constructor(private todoService: TodosService){}

  transform(value: ImportanceEnum): string {
    if(value in this.todoService.Importances){
      return this.todoService.Importances[value];
    }else{
      return "Unknown Importance"
    }
  }

}
