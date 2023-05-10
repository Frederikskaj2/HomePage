import React from 'react';
import { useTheme } from '@mui/material/styles';
import TopMenu from './TopMenu.jsx';

export default function Layout({ title, children }) {
    const theme = useTheme();
    return (
        <>
            <div css={{
                height: '100%',
                width: '100%',
                position: 'fixed',
                display: 'flex',
                justifyContent: 'space-between',
                overflowY: 'hidden',
            }}>
                <TopMenu />
                <main css={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    overflowY: 'auto',
                    marginTop: theme.mixins.toolbar.minHeight,
                    '@media (min-width:0px) and (orientation: landscape)': {
                        marginTop: theme.mixins.toolbar['@media (min-width:0px)']['@media (orientation: landscape)'].minHeight,
                    },
                    '@media (min-width:600px)': {
                        marginTop: theme.mixins.toolbar['@media (min-width:600px)'].minHeight,
                    },
                }}>{children}</main>
            </div>
        </>
    );
};
