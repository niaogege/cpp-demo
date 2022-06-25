import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";
export default class Route extends React.Component {
  constructor() {}
  // children > component > render
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const location = this.props.location || context.location;
          const match = this.props.computedMatch
            ? this.props.computedMatch // <Switch> already computed the match for us
            : matchPath(location.pathname, this.props)
            ? location.pathname
            : context.match;

          const props = { ...context, location, match };

          let { children, component, render } = this.props;
          return (
            <RouterContext.Provider value={props}>
              {props.match
                ? children
                  ? typeof children === "function"
                  : children(props)
                : component
                ? React.createElement(component, props)
                : render
                ? render(props)
                : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
