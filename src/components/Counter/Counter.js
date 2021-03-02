import React, { Component } from 'react';
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
        <span className={styles.Counter__value}>{this.state.value}</span>
        <div className={styles.Counter__controls}>
          <button
            type="button"
            onClick={this.handleDecrement}
            className="decrease"
          >
            Decrease by 1
          </button>
          <button
            type="button"
            onClick={this.handleIncrement}
            className="increase"
          >
            Increase by 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
