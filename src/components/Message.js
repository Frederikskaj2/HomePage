import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

export default ({ severity, title, message }) => {
    const [open, setOpen] = React.useState(true);

    return (
        <Collapse in={open}>
            <Alert
                severity={severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Collapse>
    );
};
