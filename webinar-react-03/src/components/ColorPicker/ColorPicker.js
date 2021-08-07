import React, { Component } from 'react';

import styles from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [styles.ColorPicker__option];

    if (this.state.activeOptionIdx === index) {
      optionClasses.push(styles['ColorPicker__option--active']);
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label, color } = options[activeOptionIdx];

    return (
      <>
        <p className={styles.label} style={{ color: color }}>
          {label}
        </p>
        <div className={styles.ColorPicker}>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              style={{ backgroundColor: color }}
              className={this.makeOptionClassName(index)}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </>
    );
  }
}

export default ColorPicker;
