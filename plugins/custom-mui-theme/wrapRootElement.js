import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {element}
        </ThemeProvider>
    );
};
