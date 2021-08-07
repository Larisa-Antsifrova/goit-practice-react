import PropTypes from "prop-types";
import React from "react";

// Creating Panel component
const Panel = ({ title, children }) => (
  <div>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

// Assigning default property for title. Empty string to be converted into false when checking condition
Panel.defaultProps = {
  title: "",
};

// Describing properties types
Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
