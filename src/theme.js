import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        white: {
            main: "#fff"
        },
        black: {
            main: '#000',
        },
        darkblue: {
            main: "#414880"
        },
        gray: {
            main: "#8B8B8B"
        },
        pinkBolder: {
            main: "#FF64AE"
        },

    },

    components: {
        MuiInputLabel: {
            defaultProps: {
                sx: {
                    fontSize: "1.6rem",
                    color: "#C5C5C5"
                },
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                sx: {
                    fontSize: "1.6rem",
                    color: "#414880"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          font-size: 1.6rem;
        }
      `,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            customHome1: 1380,
        },
    },

});
export default theme;