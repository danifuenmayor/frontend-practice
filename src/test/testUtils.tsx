// import { applyMiddleware, createStore } from "redux";
// import { middlewares } from "./../src/createStore";
// import { rootReducer } from "../reducers";

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// export const testStore = (initialState) => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(
//     createStore
//   );
//   return createStoreWithMiddleware(rootReducer, initialState);
// };
