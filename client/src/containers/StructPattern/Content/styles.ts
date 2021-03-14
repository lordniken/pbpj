import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  theme => ({
    spacer: {
      ...theme.mixins.toolbar,
    }
  }),
  { name: 'AppContent' },
);