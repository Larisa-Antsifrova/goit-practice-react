import React from 'react';
import PropTypes from 'prop-types';

import styles from './Value.module.css';

const Value = ({ value }) => {
  return <span className={styles.Counter__value}>{value}</span>;
};

Value.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Value;
