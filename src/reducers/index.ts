import { exampleReducer } from "./example";
import { combineReducers } from "redux";
import { UserReducer } from "./user";
import { ProductReducer } from "./products";

export const rootReducer = combineReducers({
  example: exampleReducer,
  user: UserReducer,
  products: ProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
