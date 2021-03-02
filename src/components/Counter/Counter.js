import React, { Component } from 'react';
import styles from './Counter.module.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  handleDecrement = event => {
    console.log('event target', event.target);
    console.log('Hello, I am right button');
    console.log(this);

    const { target } = event;

    setTimeout(() => {
      console.log('event target in Decrement STO', target);
    }, 1000);
  };

  handleIncrement = event => {
    console.log('event type', event.type);
    console.log('Hello, I am left button');
    console.log(this);

    const { target } = event;

    setTimeout(() => {
      console.log('event type in Increment STO', target);
    }, 1000);
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
