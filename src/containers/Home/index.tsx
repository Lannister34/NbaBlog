import React, { useEffect } from 'react';
import NavigationBar from 'components/NavigationBar';
import { useDispatch, useSelector } from 'react-redux';
import { leaguesRequest, teamsRequest } from './actions';
import { RootState } from 'redux/rootReducer';
import TeamList from 'components/TeamList';
import { Box } from '@material-ui/core';
import styles from './styles.module.scss';
import Spinner from 'components/Spinner';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const homeState = useSelector((state: RootState) => {
    return state.home;
  });
  const firstLeague = homeState.leagues[0];
  const firstTeam = homeState.teams[0];

  useEffect(() => {
    if (!firstLeague) {
      dispatch(leaguesRequest());
    } else {
      !firstTeam && dispatch(teamsRequest(firstLeague));
    }
  }, [firstLeague, firstTeam, dispatch]);

  return (
    <React.Fragment>
      <NavigationBar isHomepage={true} />
      {!homeState.isLoading ? (
        <Box className={styles.contentWrapper}>
          <TeamList teamList={homeState.teams} />
        </Box>
      ) : (
        <Spinner page={true} />
      )}
    </React.Fragment>
  );
};

export default Home;
