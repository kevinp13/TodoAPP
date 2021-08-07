import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtersValid } from 'src/app/filter/filter.actions';

import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[];
  currentFilter:filtersValid;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe(state => {
      this.todos=state.todos
      this.currentFilter = state.filter;
    })
  }

}
