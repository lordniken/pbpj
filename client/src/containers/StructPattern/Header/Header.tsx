import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header: React.FC = () => (
  <AppBar>
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
