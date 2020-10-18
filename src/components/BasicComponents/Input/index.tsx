import React from 'react';
import MTextField, { TextFieldProps } from '@material-ui/core/TextField';
import styles from './styles.module.scss';

export enum InputType {
  warning = 'warning',
  error = 'error',
}

export interface IInputProps {
  inputType?: InputType;
  value?: unknown;
}

const Input: React.FC<TextFieldProps & IInputProps> = (props) => {
  const { inputType, className, ...restProps } = props;
  const classes = [styles.input];

  if (className) {
    classes.push(className);
  }

  switch (inputType) {
    case InputType.warning:
      classes.push(styles.inputWarning);
      break;
    case InputType.error:
      classes.push(styles.inputError);
  }


  return <MTextField className={classes.join(' ')} {...restProps} />;
};

export default Input;
