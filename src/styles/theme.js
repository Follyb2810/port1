import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
    primary: {
      main: '#0000FF', // Custom primary color
      // main: blue, // Custom primary color
    },
    secondary: {
      main: '#FFFFFF', // Custom secondary color
    },
    error :{
      main: '#808080',
    },
    warning:{
      main: '#FFFF00',
    },
    info :{
      main: '#FFA500',
    },
    success:{
      main: '#00FF00',
    },
 
  },
});




export default theme;

