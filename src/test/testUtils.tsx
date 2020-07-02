// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from './../reducers';
// import { middlewares } from './../store';

export const findByTestAttr = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test='${val}']`);
};

// export const testStore = (initialState) => {
//     const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//     return createStoreWithMiddleware(rootReducer, initialState);
// };
