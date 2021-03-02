import React from 'react';

import styles from './ColorPicker.module.css';

const ColorPicker = ({ options }) => {
  return (
    <div className={styles.ColorPicker}>
      {options.map(({ label, color }) => (
        <span
          key={label}
          className={styles.ColorPicker__option}
          style={{
            backgroundColor: color,
          }}
        ></span>
      ))}
    </div>
  );
};

export default ColorPicker;
