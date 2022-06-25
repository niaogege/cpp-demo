export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  // 整合合并后的state 扁平化处理
  return function combine(state = {}, action) {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  };
}
