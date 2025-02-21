import { Pipe, PipeTransform } from '@angular/core';
import { filtersValid } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTasks',
  standalone: true,
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filtersValid): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(todo =>todo.completed);
      case 'pending':
        return todos.filter(todo =>!todo.completed);
      default:
        return todos;
    }
  }

}
