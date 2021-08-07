import { Action, createReducer, on } from '@ngrx/store';
import { filtersValid, setFilter } from './filter.actions';

export const initialState: filtersValid = 'all';

const _filterReducer = createReducer<filtersValid,Action>(
  initialState,
  on (setFilter,(state2, { filter } ) => filter)
);

export function filterReducer(state2:filtersValid|undefined,action2:Action){
  return _filterReducer(state2,action2);
}
