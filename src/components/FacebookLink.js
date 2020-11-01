import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
    icon: {
        verticalAlign: 'bottom',
    },
}));

export default ({ href, children }) => {
    const classes = useStyles();
    return (
        <Typography variant="body1" component="p" paragraph>
            <Link
                href={href}
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                color="secondary"
            >
                <FacebookIcon className={classes.icon} color="primary" />
                {children}
            </Link>
        </Typography>
    );
};
