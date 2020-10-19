import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import styles from './styles.module.scss';

type ISpinnerProps = {
  page?: boolean;
  className?: string;
};

const Spinner = ({ page = false, className = '' }: ISpinnerProps): JSX.Element => {
  const combinedClass = [styles.spinner, className, page ? styles.page : ''].join(' ');

  return (
    <Box className={combinedClass}>
      <CircularProgress size={100} />
    </Box>
  );
};

export default Spinner;
