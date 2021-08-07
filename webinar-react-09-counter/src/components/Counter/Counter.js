import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/counter/counter-actions';
import Controls from './Controls/Controls';
import Value from './Value/Value';

import styles from './Counter.module.css';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div className={styles.Counter}>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(increment(step)),
  onDecrement: step => dispatch(decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
