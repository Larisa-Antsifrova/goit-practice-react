import React from 'react';

import styles from './Value.module.css';

const Value = ({ value }) => {
  return <span className={styles.Counter__value}>{value}</span>;
};

export default Value;
