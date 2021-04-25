import { Book } from "./app.model";

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}