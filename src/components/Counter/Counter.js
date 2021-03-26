import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions';
import Controls from './Controls/Controls';
import Value from './Value/Value';

import styles from './Counter.module.css';

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.Counter}>
      <Value value={value} />
      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.counterValue,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment(1)),
  onDecrement: () => dispatch(decrement(1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
