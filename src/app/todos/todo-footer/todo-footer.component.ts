import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearCompleted } from '../todo.actions';
import { AppState } from '../../app.reducer';
import { filtersValid, setFilter } from '../../filter/filter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentFilter:filtersValid = 'all';
  filters: filtersValid[] = ['all','completed','pending'];
  pendingTasks:number = 0;

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
