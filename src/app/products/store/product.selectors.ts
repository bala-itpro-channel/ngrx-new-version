import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, productsFeatureKey, selectAll, selectTotal } from "./product.reducer";

export const selectProductState = createFeatureSelector<ProductState>(
  productsFeatureKey
);

export const selectProducts = createSelector(selectProductState, selectAll);
export const selectedProduct = createSelector(
  selectProductState,
  (state: ProductState) => state.selectedProduct
);
export const selectProdTotal = createSelector(selectProductState, selectTotal)
