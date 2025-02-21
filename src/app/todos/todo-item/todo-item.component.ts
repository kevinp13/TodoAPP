import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { deleteTodo, edit, toggle } from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  chkCompleted:FormControl = new FormControl();
  txtInput:FormControl = new FormControl();
  isEditing= false;
  @ViewChild('inputEdit') txtInputEdit!: ElementRef;
  @Input() todo!:Todo;
  constructor(private cdr:ChangeDetectorRef, private store:Store<AppState>) { }


  ngOnInit(): void {
    this.chkCompleted= new FormControl(this.todo.completed);
    this.txtInput= new FormControl(this.todo.text,Validators.required);
    this.chkCompleted.valueChanges.subscribe(()=>{
      this.store.dispatch(toggle({id:this.todo.id}));
    })
  }

  edit(){

    this.isEditing = true;
    this.txtInput.setValue(this.todo.text);
    this.cdr.detectChanges();
    this.txtInputEdit.nativeElement.select();
  }

  endEdit(){
    this.isEditing=false;
    if(this.txtInput.invalid || this.txtInput.value === this.todo.text){
      return;
    }
    this.store.dispatch(edit({id:this.todo.id,text:this.txtInput.value}))

  }

  delete(){
    this.store.dispatch(deleteTodo({id:this.todo.id}));
  }

}
