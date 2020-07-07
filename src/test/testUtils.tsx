// import { applyMiddleware, createStore } from "redux";
// import { middlewares } from "./../src/createStore";
// import { rootReducer } from "../reducers";

import { ReactWrapper } from "enzyme";

export const findByTestAttr = (wrapper: ReactWrapper, val: ReactWrapper) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// export const testStore = (initialState) => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(
//     createStore
//   );
//   return createStoreWithMiddleware(rootReducer, initialState);
// };
