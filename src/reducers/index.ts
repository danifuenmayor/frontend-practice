import { exampleReducer } from "./example";
import { combineReducers } from "redux";
import { UserReducer } from "./user";
import { BrandsReducer } from "./brands"

export const rootReducer = combineReducers({
  example: exampleReducer,
  user: UserReducer,
  brands: BrandsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
