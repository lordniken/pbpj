import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  theme => ({
    content: {
      padding: theme.spacing(1)
    }
  }),
  { name: 'AppContent' },
);