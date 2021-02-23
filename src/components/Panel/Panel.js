import PropTypes from 'prop-types';
import React from 'react';

// Inline styles example
const styles = {
  container: {
    backgroundColor: 'pink',
    padding: '10px',
    color: 'black',
  },
};

// Creating Panel component
const Panel = ({ title, children }) => (
  <div style={styles.container}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

// Assigning default property for title. Empty string to be converted into false when checking condition
Panel.defaultProps = {
  title: '',
};

// Describing properties types
Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
