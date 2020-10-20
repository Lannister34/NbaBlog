import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { teamRequest } from 'containers/Home/actions';
import { RootState } from 'redux/rootReducer';
import { Container, Grid, Typography } from '@material-ui/core';
import { Team } from 'common/models/team';
import NavigationBar from 'components/NavigationBar';
import styles from './styles.module.scss';

interface MatchParams {
  id: string;
}

type ITeamPageProps = RouteComponentProps<MatchParams>;

const TeamPage = (props: ITeamPageProps): JSX.Element => {
  const teamId = props.match.params.id;
  const dispatch = useDispatch();
  const homeState = useSelector((state: RootState) => {
    return state.home;
  });
  const teamData = homeState.team;

  useEffect(() => {
    dispatch(teamRequest(teamId));
  }, [teamId, dispatch]);

  interface ITeamInfoProps {
    team: Team | null;
  }
  console.log(teamData);
  const TeamInfo = ({ team }: ITeamInfoProps): JSX.Element | null => {
    if (team) {
      return (
        <React.Fragment>
          <img src={team.logo} alt={team.fullName} width={300} />
          <Typography variant="h3">{team.fullName}</Typography>
        </React.Fragment>
      );
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <Container>
        <Grid className={styles.teamWrapper}>
          <TeamInfo team={teamData} />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default TeamPage;
