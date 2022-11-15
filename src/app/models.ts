import { FormControl, FormGroup } from "@angular/forms";

/* #region Interface */
export interface ToDo_v1 {
    id: number,
    title: string,
    description: string,
    importance: number
}
/* #endregion */

/* #region  Type Alias */
export type ImportanceEnum = 1 | 2 | 3 | 4 | 5;
export interface ToDo_v2 {
    id: number,
    title: string,
    description: string,
    importance: ImportanceEnum
}
/* #endregion */

/* #region Generics */
export interface Entity {
    id: number;
}
export interface ToDo extends Entity {
    id: number,
    title: string,
    description: string,
    importance: ImportanceEnum
}
export type TOrTCollection<T> = T | T[];
export interface ApiResponse<T extends Entity> {
    data: TOrTCollection<T>,
    length?: number,
    next?: string
}
/* #endregion */

/* #region ADT */
export type ImportanceMap = {
    [key in ImportanceEnum]: string;
};

export type FormModel<T> = FormGroup<{
    // [key in keyof T]: T[key] extends number ? FormControl<T[key] | null> : FormControl<T[key] | null | undefined>
    [key in keyof T]: FormControl<T[key] | null>
}>

export interface AuditCreate {
    createdAt: string,
    createdById: number,
    createdByName: string
}
export interface AuditUpdate {
    updatedAt: string,
    updatedById: number,
    updatedByName: string
}
export interface AuditDelete {
    deletedAt: string,
    deletedById: number,
    deletedByName: string
}

export type CreatedToDo = ToDo & AuditCreate & { type: "create" }
export type UpdatedToDo = ToDo & AuditUpdate & { type: "update" }
export type DeletedToDo = ToDo & AuditDelete & { type: "delete" }

export type HistoricalToDo_V1 = ToDo & AuditCreate & AuditUpdate & AuditDelete;

export type OneOfTodo =
    | CreatedToDo
    | UpdatedToDo
    | DeletedToDo
/* #endregion */

/* #region Type Predicates */
export function isCreatedTodo(todo: OneOfTodo): todo is CreatedToDo {
    return (todo as CreatedToDo).type === "create";
}

export function isUpdatedTodo(todo: OneOfTodo): todo is UpdatedToDo {
    return (todo as UpdatedToDo).type === "update";
}

export function isDeletedTodo(todo: OneOfTodo): todo is DeletedToDo {
    return (todo as DeletedToDo).type === "delete";
}


export function isToDoToCreate(todo: any): todo is ToDoToCreate{
    return (
        todo.title 
        && (typeof todo.title === "string")
        && todo.importance
        && [1,2,3,4,5].includes(todo.importance)
        && (
            !todo.description
            || typeof todo.description === "string"
        )
    )
}

/*
const from: any = {type:"create", createdAt: "January", createdById: 1, createdByName: "Emiliano", description: "Description", id: 2, importance: "Critical", title: "Sample"};
const todo: OneOfTodo = from;
if(isCreatedTodo(todo)){   
}
*/

/* #endregion */

/* #region Utility Types */

export type ToDoPreview = Pick<ToDo, "id" | "title" | "importance">

export type ToDoToCreate = Required<Pick<ToDo, "title" | "importance">> & Partial<Pick<ToDo, "description">>;

export type ToDoToUpdate = Partial<ToDoToCreate> & Readonly<Entity>

export type ToDoToDelete = Pick<ToDo, "id">

export type HistoricalToDo = Omit<CreatedToDo, "type"> & Partial<Omit<UpdatedToDo, "type">> & Partial<Omit<DeletedToDo, "type">>;

/* #endregion */