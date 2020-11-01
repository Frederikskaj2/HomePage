import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
    },
}));

export default ({ pdf, image, text }) => {
    const classes = useStyles();

    // eslint-disable-next-line react/jsx-no-target-blank
    return (
        <Typography variant="body1" component="p" paragraph>
            <Link href={pdf} color="secondary" target="_blank">
                {image ? <img className={classes.image} src={image} alt={text} /> : <span>{text}</span>}
            </Link>
        </Typography>
    );
};
