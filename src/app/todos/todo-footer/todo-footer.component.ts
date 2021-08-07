import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtersValid, setFilter } from 'src/app/filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentFilter:filtersValid;
  filters: filtersValid[] = ['all','completed','pending'];
  pendingTasks:number;

  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe( filter => this.currentFilter=filter);
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTasks = state.todos.filter(todo=> !todo.completed).length;
    })
  }

  changeFilter(filter:filtersValid) {
    this.store.dispatch(setFilter({filter}));
  }
  clearCompleted(){
    this.store.dispatch(clearCompleted());
  }
}
