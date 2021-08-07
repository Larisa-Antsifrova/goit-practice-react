import styles from './AppBar.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const AppBar = () => (
  <header className={styles.header}>
    <Container>
      <Logo />
    </Container>
  </header>
);

export default AppBar;
