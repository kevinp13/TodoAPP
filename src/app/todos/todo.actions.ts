import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] create ToDo',
  props<{text:string}>()
);

export const toggle = createAction(
  '[TODO] toggle ToDo',
  props<{id: number}>()
)

export const deleteTodo = createAction(
  '[TODO] delete ToDo',
  props<{id: number}>()
)

export const edit = createAction(
  '[TODO] edit ToDo',
  props<{id: number,text: string}>()
)

export const toggleAll = createAction(
  '[TODO] toggleAll ToDo',
  props<{completed:boolean}>()
)

export const clearCompleted = createAction(
  '[TODO] clearCompleted ToDo'
)
