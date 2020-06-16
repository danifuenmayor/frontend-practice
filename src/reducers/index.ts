import { exampleReducer } from "./example";
import { combineReducers } from "redux";
import { UserReducer } from "./user";
import { ProductReducer } from "./products";
import { AdminReducer } from "./admin";

export const rootReducer = combineReducers({
  example: exampleReducer,
  user: UserReducer,
  products: ProductReducer,
  admin: AdminReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
