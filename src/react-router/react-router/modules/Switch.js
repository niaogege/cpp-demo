import React from "react";
import RouterContext from "./RouterContext";
import matchPath from "./matchPath";
class Switch extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const location = this.props.location || context.location;
          let match, element;
          React.Children.forEach((child) => {
            if (match === null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path || child.props.from;
              match = path
                ? matchPath(location.pathname, { ...child.props, path })
                : context.match;
            }
          });
          return match
            ? React.cloneElement(element, {
                location,
                computedMatch: match,
              })
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}

export default Switch;
