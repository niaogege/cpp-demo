import { ReactReduxContext } from "./context";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
} from "react";
import shallowEqual from "./shallow-equal";

const connect = ({ mapStateToProps, mapDispatchToProps, ...rest }) => {
  const wrapWithConnect = (WrappedComponent) => {
    function ConnectFunction(props) {
      const { ...wrapperProps } = props;
      const context = useContext(ReactReduxContext);
      const { store } = context;
      const state = store.getState();
      // 执行mapStateToProps
      const stateProps = mapStateToProps(state);
      const dispatchProps = mapDispatchToProps(store.dispatch);
      const [, forceComponentUpdate] = useReducer((c) => c + 1, 0);
      function childPropsSelector(store, wrapperProps) {
        const state = store.getState(); // 拿到state

        // 执行mapStateToProps和mapDispatchToProps
        const stateProps = mapStateToProps(state);
        const dispatchProps = mapDispatchToProps(store.dispatch);

        return Object.assign({}, stateProps, dispatchProps, wrapperProps);
      }

      const actualChildProps = Object.assign(
        {},
        stateProps,
        dispatchProps,
        wrapperProps
      );
      const lastChildProps = useRef();
      useLayoutEffect(() => {
        lastChildProps.current = actualChildProps;
      }, [actualChildProps]);

      store.subscribe(() => {
        const newChildProps = childPropsSelector(store, wrapperProps);
        if (!shallowEqual(newChildProps, lastChildProps.current)) {
          lastChildProps.current = newChildProps;
          forceComponentUpdate();
        }
      });

      return <WrappedComponent {...actualChildProps} />;
    }
    return ConnectFunction;
  };
  return wrapWithConnect;
};
export default connect;
