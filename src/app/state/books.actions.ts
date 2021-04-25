import { createAction, props } from "@ngrx/store";
import { Book } from "./app.model";

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
)

export const removeBook = createAction(
  '[Book List] Remove Book',
  props<{ bookId: string }>()
)

export const loadBookList = createAction(
  '[Book List] Load Books'
)

export const retrievedBookList = createAction(
  '[Book List] Retrieve Books Success',
  props<{ Book: Book[] }>()
)