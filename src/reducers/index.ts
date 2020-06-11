import { exampleReducer } from "./example";
import { combineReducers } from "redux";
import { UserReducer } from "./user";

export const rootReducer = combineReducers({
  example: exampleReducer,
  user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
