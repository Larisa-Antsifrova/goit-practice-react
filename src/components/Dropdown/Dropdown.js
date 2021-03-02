import React, { Component } from 'react';

import styles from './Dropdown.module.css';

class Dropdown extends Component {
  render() {
    return (
      <div className={styles.Dropdown}>
        <button
          type="button"
          className={styles.Dropdown__toggle}
          onClick={this.toggle}
        >
          Show
        </button>

        <div className={styles.Dropdown__menu}>Dropdown Menu</div>
      </div>
    );
  }
}

export default Dropdown;
