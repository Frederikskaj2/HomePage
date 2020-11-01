import React from 'react';
import Seo from './Seo';
import TopMenu from './TopMenu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',
        overflowY: 'hidden',
    },
    main: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        overflowY: 'auto',
        marginTop: theme.mixins.toolbar.minHeight,
        '@media (min-width:0px) and (orientation: landscape)': {
            marginTop: theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight,
        },
        '@media (min-width:600px)': {
            marginTop: theme.mixins.toolbar['@media (min-width:600px)'].minHeight,
        },
    },
}));

export default ({ title, children }) => {
    const classes = useStyles();

    return (
        <>
            <Seo title={title} />
            <div className={classes.container}>
                <TopMenu />
                <main className={classes.main}>{children}</main>
            </div>
        </>
    );
};
