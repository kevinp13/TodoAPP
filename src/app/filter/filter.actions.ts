import { createAction, props } from '@ngrx/store';

export type filtersValid = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[filter] setFilter',
  props<{ filter: filtersValid }>()
);
