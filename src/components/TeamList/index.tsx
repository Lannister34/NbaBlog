import React from 'react';
import { Team } from 'common/models/team';
import { Card, CardActionArea, CardContent, CardMedia, GridList, GridListTile, Typography } from '@material-ui/core';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface ITeamListProps {
  teamList: Array<Team>;
}

const TeamList = ({ teamList }: ITeamListProps): JSX.Element => {
  return (
    <GridList cellHeight="auto" cols={5} spacing={30}>
      {teamList.map((team) => (
        <GridListTile key={team.teamId} cols={1}>
          <Link to={`team/${team.teamId}`}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={styles.logo}
                  component="img"
                  height="140"
                  alt={team.fullName}
                  image={team.logo}
                  title={team.fullName}
                />
                <CardContent>
                  <Typography className={styles.fullName} align="center" variant="h5" component="h2">
                    {team.fullName}
                  </Typography>
                  <Typography className={styles.shortName} align="center" variant="h6" component="h3">
                    {team.shortName}
                  </Typography>
                  <Typography className={styles.city} align="center" variant="h6" component="h4">
                    City: {team.city}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </GridListTile>
      ))}
    </GridList>
  );
};

export default TeamList;
