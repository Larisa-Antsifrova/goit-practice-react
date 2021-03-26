import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/actions';
import Controls from './Controls/Controls';
import Value from './Value/Value';

import styles from './Counter.module.css';

const Counter = ({ counterValue, onIncrement, onDecrement }) => {
  return (
    <div className={styles.Counter}>
      <Value value={counterValue} />
      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

const mapStateToProps = ({ counterValue }) => ({
  counterValue,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment(1)),
  onDecrement: () => dispatch(decrement(1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
