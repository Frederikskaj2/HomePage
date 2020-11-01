import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    linkTarget: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

export default ({ name, children }) => {
    const classes = useStyles();
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a className={classes.linkTarget} name={name}>{children}</a>;
};
