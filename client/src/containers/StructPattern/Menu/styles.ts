import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  theme => ({
    menu: {
      marginTop: theme.spacing(8)
    },
    menuLink: {
      color: theme.palette.text.primary,
      '&:hover': {
        textDecoration: 'none',
      },
    }
  }),
  { name: 'AppMenu' },
);