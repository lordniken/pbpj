import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  theme => ({
    aside: {
      width: 260
    },
    header: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      height: 72,
      borderRight: `1px solid ${theme.palette.divider}`
    },
    menu: {
      '& > div': {
        top: 72,
        width: 260
      },      
    },
    menuLink: {
      color: theme.palette.text.primary,
      '&:hover': {
        textDecoration: 'none'
      },
    }
  }),
  { name: 'AppAside' }
);