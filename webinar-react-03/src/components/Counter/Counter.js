import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Value from './Value/Value';

import styles from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleDecrement = () => {
    if (this.state.value < 1) {
      return;
    }

    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  render() {
    return (
      <div className={styles.Counter}>
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
