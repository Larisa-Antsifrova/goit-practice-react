import React, { Component } from 'react';

import styles from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  render() {
    return (
      <div className={styles.ColorPicker}>
        {this.props.options.map(({ label, color }, index) => {
          const optionClasses = [styles.ColorPicker__option];

          if (this.state.activeOptionIdx === index) {
            optionClasses.push(styles['ColorPicker__option--active']);
          }

          return (
            <button
              key={label}
              style={{
                backgroundColor: color,
              }}
              className={optionClasses.join(' ')}
            ></button>
          );
        })}
      </div>
    );
  }
}

export default ColorPicker;
