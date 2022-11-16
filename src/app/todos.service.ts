import { Injectable } from '@angular/core';
import { ApiResponse, CreatedToDo, ImportanceMap, isCreatedTodo, isDeletedTodo, isUpdatedTodo, OneOfTodo, ToDo, ToDoToCreate, ToDoToDelete, ToDoToUpdate } from './models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  CreateToDo(todo: ToDoToCreate): Promise<ApiResponse<OneOfTodo>>{
    return new Promise(
      resolve => setTimeout(() => resolve({data: {
        ...todo, 
        id: this.ToDos.length + 1, 
        description: todo.description ?? "", 
        audit : {
          createdAt: new Date().toISOString(),
          createdById: 2,
          createdByName: "Emiliano"
        }
      }}), 500)
    )
  }

  UpdateToDo(todo: ToDoToUpdate){
    return new Promise(
      resolve => setTimeout(() => resolve({}), 500)
    )
  }

  Importances = {
    1: "Critical",
    2: "Important",
    3: "Medium",
    4: "Low",
    5: "Optional"
  } as ImportanceMap;

  GetToDos(){
    return this.ToDos.filter(x => isCreatedTodo(x) || isUpdatedTodo(x)).map(x => x as ToDo);
  }

  DeleteToDo(todo: ToDoToDelete){
    return new Promise(
      resolve => setTimeout(() => resolve({}), 500)
    )
  }

  All(){
    return this.ToDos;
  }

  Created(){
    return this.ToDos.filter(isCreatedTodo);
  }

  Updated(){
    return this.ToDos.filter(isUpdatedTodo);
  }

  Deleted(){
    return this.ToDos.filter(isDeletedTodo);
  }

  private ToDos = [
    {
      "id": 1,
      "title": "delectus aut autem",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano",
      
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    },
    {
      "id": 4,
      "title": "et porro tempora",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    },
    {
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    },
    {
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 13,
      "title": "et doloremque nulla",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano",
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    },
    {
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano",
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    },
    {
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 21,
      "title": "suscipit repellat esse quibusdam voluptatem incidunt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 22,
      "title": "distinctio vitae autem nihil ut molestias quo",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano",
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    },
    {
      "id": 23,
      "title": "et itaque necessitatibus maxime molestiae qui quas velit",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 24,
      "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 25,
      "title": "voluptas quo tenetur perspiciatis explicabo natus",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 26,
      "title": "aliquam aut quasi",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano",
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    },
    {
      "id": 27,
      "title": "veritatis pariatur delectus",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 28,
      "title": "nesciunt totam sit blanditiis sit",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 29,
      "title": "laborum aut in quam",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
    },
    {
      "id": 30,
      "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 31,
      "title": "repudiandae totam in est sint facere fuga",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    },
    {
      "id": 32,
      "title": "earum doloribus ea doloremque quis",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "updatedAt": new Date(2022, 10, 22).toISOString(),
      "updatedById": 1,
      "updatedByName": "Emiliano"
    },
    {
      "id": 33,
      "title": "sint sit aut vero",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.",
      "createdAt": new Date(2021, 10, 22).toISOString(),
      "createdById": 1,
      "createdByName": "Emiliano",
      "importance": 3,
      "deletedAt": new Date(2022, 11, 2).toISOString(),
      "deletedById": 1,
      "deletedByName": "Emiliano"
    }].map(x => {
      const {createdAt, createdById, createdByName, updatedAt, updatedById, updatedByName, deletedAt, deletedById, deletedByName, ...r} = x;
      const audit = {
        createdAt, createdById, createdByName, 
        updatedAt, updatedById, updatedByName, 
        deletedAt, deletedById, deletedByName
      };
      return {...r, audit};
    }) as OneOfTodo[];
}
