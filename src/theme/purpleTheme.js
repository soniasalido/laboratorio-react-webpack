
import { createTheme } from '@mui/material';
import { red  } from '@mui/material/colors';

//Sobre el tema purple de material-ui, sobrecargamos el tema por defecto, para ponerlo a nuestro gusto
export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: "#543884"
        },
        secondary: {
            main: "#4e85bb"
        },
        tertiary: {
            main: "#ec8f17"
        },
        error: {
            main: red.A400
        }
    }
})

