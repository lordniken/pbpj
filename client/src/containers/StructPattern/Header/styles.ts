import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  theme => ({
    header: {
      backgroundColor: theme.palette.background.default,
      height: 72,
      padding: theme.spacing(1)
    }
  }),
  { name: 'AppHeader' },
);