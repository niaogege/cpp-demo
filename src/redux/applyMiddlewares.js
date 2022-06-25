import compose from "./compose";
const applyMiddleware = function (...middlewares) {
  return function rewriteCreateStoreFunc(oldCreateStore) {
    return function newCreateStore(reducer, initState) {
      // generate store
      const store = oldCreateStore(reducer, initState);
      // 每个middleware传參store
      const simpleStore = {
        getState: store.getState,
      };
      const chain = middlewares.map((middleware) => middleware(simpleStore));

      // let dispatch = store.dispatch;
      // /* 实现 exception(time((logger(dispatch))))*/
      // chain.reverse().forEach((middleware) => {
      //   dispatch = middleware(dispatch);
      // });
      // store.dispatch = dispatch;
      // return store;
      const dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
};

export default applyMiddleware;
