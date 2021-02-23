import styles from './AppBar.module.css';
import Container from '../Container/Container';

const AppBar = () => (
  <header className={styles.header}>
    <Container>
      <a href="#!">LOGO</a>
    </Container>
  </header>
);

export default AppBar;
