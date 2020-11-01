import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import theme from './theme.json';

export default responsiveFontSizes(createMuiTheme(theme));
