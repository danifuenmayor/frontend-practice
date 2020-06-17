import { exampleReducer } from "./example";
import { combineReducers } from "redux";
import { UserReducer } from "./user";
import { BrandsReducer } from "./brands"
import { ProductReducer } from "./products";
import { AdminReducer } from "./admin";

export const rootReducer = combineReducers({
  example: exampleReducer,
  user: UserReducer,
  brands: BrandsReducer,
  products: ProductReducer,
  admin: AdminReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
