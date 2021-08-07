import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { clearCompleted, create, deleteTodo, edit, toggle, toggleAll } from './todo.actions';


export const initialState:Todo[] = [
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state:Todo[],{text}) => [...state,new Todo(text)]),

  on(toggle, (state:Todo[],{id}) => {

    return state.map(todo=>{

      if(todo.id === id){
        return {...todo,completed:!todo.completed};
      }

      return {...todo};
    })
  }),

  on(edit,(state:Todo[],{id,text})=>{
    return state.map(todo=>{

      if(todo.id === id){
        return {...todo, text:text};
      }

      return {...todo};
    })
  }),

  on(deleteTodo,(state:Todo[],{id})=>state.filter(todo=> todo.id !== id)),
  on(toggleAll,(state:Todo[],{completed})=>{
    return state.map(todo=>({...todo,completed}));
  }),
  on(clearCompleted, (state:Todo[])=>state.filter(todo=>!todo.completed))
);

export function todoReducer(state:Todo[]|undefined, action:Action) {
  return _todoReducer(state, action);
}
