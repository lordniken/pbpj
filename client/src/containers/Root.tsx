import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import useGlobalStyles from 'hooks';
import theme from 'global/theme';

const Root: React.FC = () => {
  useGlobalStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <p>Global styles testing</p>
    </MuiThemeProvider>
  );
};

export default Root;