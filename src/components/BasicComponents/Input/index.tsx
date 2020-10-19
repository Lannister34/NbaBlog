import React from 'react';
import MTextField, { TextFieldProps } from '@material-ui/core/TextField';
import styles from './styles.module.scss';

const Input: React.FC<TextFieldProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = [styles.input];

  if (className) {
    classes.push(className);
  }

  return <MTextField className={classes.join(' ')} {...restProps} />;
};

export default Input;
