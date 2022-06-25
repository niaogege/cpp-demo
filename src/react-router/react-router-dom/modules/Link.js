import React, { forwardRef } from "react";
import RouterContext from "../../react-router/modules/RouterContext";
// LinkAnchor只是渲染了一个没有默认行为的a标签
// 跳转行为由传进来的navigate实现
const LinkAnchor = forwardRef(
  ({ navigate, onClick, navigator, ...rest }, ref) => {
    const props = {
      ...rest,
      onClick: (event) => {
        if (onClick) {
          onClick(event);
        }
        event.preventDefault();
        navigator();
      },
    };
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />;
  }
);
const Link = forwardRef(
  (
    {
      component = LinkAnchor,
      replace,
      to,
      innerRef, // TODO: deprecate
      ...rest
    },
    ref
  ) => {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { history } = context;
          const props = {
            ...rest,
            href: to,
            navigator() {
              history.push(to);
            },
          };
          return React.cloneElement(component, props);
        }}
      </RouterContext.Consumer>
    );
  }
);

export default Link;
