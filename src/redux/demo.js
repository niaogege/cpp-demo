import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers,
  bindActionCreators,
} from "./index";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

function infoReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    default:
      return state;
  }
}
const reduces = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});

let initStates = {
  counter: {
    count: 0,
  },
  info: {
    name: "cpp",
    description: "WMH",
  },
};

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log("this.state logger", store.getState());
  next(action);
  console.log("next state logger", store.getState());
};

const exceptionMiddleware = (store) => (next) => {
  return (action) => {
    try {
      next(action);
    } catch (e) {
      console.log(e);
    }
  };
};
const rewriteCreateStoreFunc = applyMiddleware(
  exceptionMiddleware,
  loggerMiddleWare
);

const store = createStore(reduces, initStates, rewriteCreateStoreFunc);

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
});

function increment() {
  return {
    type: "INCREMENT",
  };
}

function setName(name) {
  return {
    type: "SET_NAME",
    name,
  };
}
// 扁平化的actions
const actions = bindActionCreators(
  {
    increment,
    setName,
  },
  store.dispatch
);

actions.increment();
actions.setName("cpp");
