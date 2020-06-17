import { exampleReducer } from "./example";
import { combineReducers } from "redux";
import { UserReducer } from "./user";
import { brandsReducer } from "./brands"
import { ProductReducer } from "./products";
import { SaleReducer } from "./sales"

export const rootReducer = combineReducers({
  example: exampleReducer,
  user: UserReducer,
  brands: brandsReducer,
  products: ProductReducer,
  sales: SaleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
