import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import Input from 'components/BasicComponents/Input';
import Button from 'components/BasicComponents/Button';
import UserSchema from 'common/validation/user';
import { loginFailure, loginRequest } from './actions';
import { RootState } from 'redux/rootReducer';
import Spinner from 'components/Spinner';
import NavigationBar from 'components/NavigationBar';

const Auth = (): JSX.Element => {
  const authState = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailValidationError, setEmailValidationError] = useState<string>('');
  const [passwordValidationError, setPasswordValidationError] = useState<string>('');

  const dispatch = useDispatch();

  const clearErrorMessages = () => {
    setEmailValidationError('');
    setPasswordValidationError('');
    authState.errorMessage && dispatch(loginFailure(''));
  };

  const validate = () => {
    clearErrorMessages();
    return new Promise((resolve, reject) => {
      UserSchema.email
        .validate(email)
        .then(() => {
          setEmailValidationError('');

          UserSchema.password
            .validate(password)
            .then(() => {
              setPasswordValidationError('');
              resolve();
            })
            .catch((err) => {
              setPasswordValidationError(err.message);
              reject();
            });
        })
        .catch((err) => {
          setEmailValidationError(err.message);
          reject();
        });
    });
  };

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setEmail(target.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setPassword(target.value);
  };

  const login = (event: React.MouseEvent) => {
    event.preventDefault();
    validate()
      .then(() => {
        dispatch(loginRequest(email, password));
      })
      .catch(() => {
        return;
      });
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <Container className={styles.authContainer} maxWidth="lg">
        <Box className={styles.loginWrapper}>
          {authState.isLoading ? (
            <Spinner />
          ) : (
            <form>
              <Box className={styles.loginHeader}>Login</Box>
              <Box className={styles.errorWrapper}>
                <Box>{authState.errorMessage}</Box>
                <Box>{emailValidationError}</Box>
                <Box>{passwordValidationError}</Box>
              </Box>
              <Box className={styles.inputsWrapper}>
                <Input
                  className={styles.input}
                  value={email}
                  onChange={onChangeEmail}
                  name="Email"
                  placeholder="Email"
                  type="text"
                  error={Boolean(emailValidationError)}
                  required
                />
                <Input
                  className={styles.input}
                  value={password}
                  onChange={onChangePassword}
                  name="Password"
                  placeholder="Password"
                  type="password"
                  error={Boolean(passwordValidationError)}
                  required
                />
              </Box>
              <Button onClick={login} className={styles.submitButton}>
                Login
              </Button>
            </form>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Auth;
