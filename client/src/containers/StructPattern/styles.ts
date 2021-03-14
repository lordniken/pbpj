import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  theme => ({
    content: {
      height: '100vh',
      background: theme.palette.background.default
    }
  }),
  { name: 'StructPattern' },
);
