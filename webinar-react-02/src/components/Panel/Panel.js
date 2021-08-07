import PropTypes from 'prop-types';
import React from 'react';
import style from './Panel.module.css';

// Inline styles example
const styles = {
  container: {
    padding: '10px',
    color: 'black',
  },
};

// Creating Panel component
const Panel = ({ title, children }) => (
  <div className={style.Panel} style={styles.container}>
    {title && <h1 className={style.title}>{title}</h1>}
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
