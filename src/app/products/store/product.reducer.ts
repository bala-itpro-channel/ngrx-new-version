import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { Product } from "../models/product";
import * as ProductActions from "./product.actions";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export const productsFeatureKey = "products";

export interface ProductState extends EntityState<Product> {
  error: any;
  selectedProduct: Product;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  error: undefined,
  selectedProduct: undefined
});

const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return adapter.addAll(action.products, state);
  }),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ProductActions.addProductSuccess, (state, action) =>
    adapter.addOne(action.product, state)
  ),
  on(ProductActions.addProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ProductActions.loadProductSuccess, (state, action) => {
    return {
      ...state,
      selectedProduct: action.selectedProduct
    };
  }),
  on(ProductActions.loadProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ProductActions.updateProduct, (state, action) =>
    adapter.updateOne(action.product, state)
  ),
  on(ProductActions.deleteProductSuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ProductActions.deleteProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  })
);

export function reducer (state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
