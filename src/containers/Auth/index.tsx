import React, { Component } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { IAuthProps, IAuthState } from './interfaces';
import { connect } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import styles from "./styles.module.scss";
import Input from 'components/BasicComponents/Input';
import Button from 'components/BasicComponents/Button';

class Auth extends Component<IAuthProps, IAuthState> {
  constructor(props: IAuthProps) {
    super(props);
  }

  render() {
    return (
    <Container className={styles.authContainer} maxWidth="lg">
      <Box className={styles.loginWrapper}>
       <form>
         <Box className={styles.loginHeader}>Login</Box>
         <Box className={styles.inputsWrapper}>
           <Input className={styles.input} name="Email" placeholder="Email" type="text" required />
           <Input className={styles.input} name="Password" placeholder="Password" type="password" required />
         </Box>
         <Button className={styles.submitButton}>Login</Button>
       </form>
      </Box>
    </Container>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    authState: state.auth,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
