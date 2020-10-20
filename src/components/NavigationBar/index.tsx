import React, { ChangeEvent } from 'react';
import { Box } from '@material-ui/core';
import styles from 'components/NavigationBar/styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import Select from 'components/BasicComponents/Select';
import { Link } from 'react-router-dom';
import { Routes } from 'common/enums/routes';
import { changeCurrentLeague } from 'containers/Home/actions';

interface INavigationBarProps {
  isHomepage?: boolean;
}

const NavigationBar = ({ isHomepage }: INavigationBarProps): JSX.Element => {
  const dispatch = useDispatch();
  const homeState = useSelector((state: RootState) => {
    return state.home;
  });

  const leaguesList = homeState.leagues.map((league) => ({
    title: league,
    value: league,
  }));

  const onSelectLeague = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    const target = event.currentTarget;
    if (homeState.currentLeague !== target.value) {
      dispatch(changeCurrentLeague(String(target.value)));
    }
  };

  return (
    <nav className={styles.navigationBar}>
      <Link to={Routes.DEFAULT}>
        <Box className={styles.logoWrapper} />
      </Link>
      {isHomepage && (
        <Box className={styles.selectWrapper}>
          <Select onChange={onSelectLeague} inputOptions={leaguesList} />
        </Box>
      )}
    </nav>
  );
};

export default NavigationBar;
