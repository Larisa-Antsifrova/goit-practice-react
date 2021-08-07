import React from 'react';
import PropTypes from 'prop-types';

import styles from './Controls.module.css';

const Controls = ({ step, onIncrement, onDecrement }) => {
  return (
    <div className={styles.Counter__controls}>
      <button type="button" onClick={onDecrement}>
        Decrease by {step}
      </button>
      <button type="button" onClick={onIncrement}>
        Increase by {step}
      </button>
    </div>
  );
};

Controls.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Controls;
