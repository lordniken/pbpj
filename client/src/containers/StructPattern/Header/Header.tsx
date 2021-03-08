import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const AppHeader: React.FC = () => {
  const styles = useStyles();

  return (
    <AppBar className={styles.header}>
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          App
        </Typography>
      </Toolbar>
    </AppBar>
  );};

export default AppHeader;
