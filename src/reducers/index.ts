import { exampleReducer } from "./example";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
