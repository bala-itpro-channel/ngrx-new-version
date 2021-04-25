import { createReducer, on } from "@ngrx/store";
import * as Actions from './books.actions'

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(Actions.addBook, (state, {bookId}) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  }),
  on(Actions.removeBook, (state, {bookId}) => {
    return state.filter(id => id !== bookId);
  })
);