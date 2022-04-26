import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const muiTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
      },
    },
  })
);
