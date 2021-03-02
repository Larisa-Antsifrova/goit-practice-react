import React, { Component } from 'react';

import styles from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    return (
      <div className={styles.Dropdown}>
        <button
          type="button"
          className={styles.Dropdown__toggle}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && (
          <div className={styles.Dropdown__menu}>Dropdown Menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
