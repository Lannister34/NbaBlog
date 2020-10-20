import React from 'react';
import { Box } from '@material-ui/core';
import styles from 'components/NavigationBar/styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import Select from 'components/BasicComponents/Select';

interface INavigationBarProps {
  isHomepage?: boolean;
}

const NavigationBar = ({ isHomepage }: INavigationBarProps): JSX.Element => {
  const homeState = useSelector((state: RootState) => {
    return state.home;
  });

  const leaguesList = homeState.leagues.map((league) => ({
    title: league,
    value: league,
  }));

  return (
    <nav className={styles.navigationBar}>
      <Box className={styles.logoWrapper} />
      <Box className={styles.selectWrapper}>
        <Select inputOptions={leaguesList} />
      </Box>
    </nav>
  );
};

export default NavigationBar;
