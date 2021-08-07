import { Fragment } from 'react';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
// import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <AppBar />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default Layout;
