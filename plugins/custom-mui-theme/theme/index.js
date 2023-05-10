import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import theme from './theme.json';

export default responsiveFontSizes(createTheme(theme));
