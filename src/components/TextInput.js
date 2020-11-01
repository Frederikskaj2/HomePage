import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginTop: theme.spacing(2),
    },
}));

export default ({ ...props }) => {
    const classes = useStyles();

    return <TextField className={classes.textField} variant="outlined" fullWidth {...props} />;
};
