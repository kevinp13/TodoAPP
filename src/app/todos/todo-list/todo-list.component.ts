import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { filtersValid } from '../../filter/filter.actions';
import { FilterPipe } from '../filter.pipe';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    FilterPipe,
    TodoItemComponent
],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[];
  currentFilter:filtersValid = 'all';
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe(state => {
      this.todos=state.todos
      this.currentFilter = state.filter;
    })
  }

}
