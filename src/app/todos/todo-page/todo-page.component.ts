import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleAll } from '../todo.actions';
import { AppState } from '../../app.reducer';
import { TodoAddComponent } from "../todo-add/todo-add.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoFooterComponent } from "../todo-footer/todo-footer.component";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    TodoAddComponent,
    TodoListComponent,
    TodoFooterComponent
],
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {

  completed=false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completed = !this.completed;
    this.store.dispatch(toggleAll({completed: this.completed}));
  }
}
