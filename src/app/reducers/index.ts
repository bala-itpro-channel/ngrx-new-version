import {
  ActionReducerMap,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { bookReducer } from "../state/books.reducer";
import { collectionReducer } from "../state/collection.renderer";

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = { books: bookReducer, collection: collectionReducer };

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
