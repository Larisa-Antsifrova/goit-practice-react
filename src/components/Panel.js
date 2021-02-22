import PropTypes from "prop-types";
import React from "react";

const Panel = ({ title, children }) => (
  <div>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

Panel.defaultProps = {
  title: "",
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
