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
    const { visible } = this.state;

    return (
      <div className={styles.Dropdown}>
        <button
          type="button"
          className={styles.Dropdown__toggle}
          onClick={this.toggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && <div className={styles.Dropdown__menu}>Dropdown Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
