import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports:[
    ReactiveFormsModule
  ],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput:FormControl;
  constructor(private store:Store<AppState>) {
    this.txtInput = new FormControl('',Validators.required);
   }

  ngOnInit(): void {
  }

  addTodo(){
    if(this.txtInput.invalid){
      return;
    }
    this.store.dispatch(actions.create({text: this.txtInput.value}));
    this.txtInput.reset();
  }
}
