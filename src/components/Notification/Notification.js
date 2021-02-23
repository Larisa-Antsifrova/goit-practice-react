import styles from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ text, state }) => (
  <p className={styles[state]}>{text}</p>
);

Notification.defaultProps = {
  state: 'normal',
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['normal', 'warning', 'error', 'success']),
};

export default Notification;
