import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});