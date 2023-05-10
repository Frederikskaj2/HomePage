import React from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function TextInput({ ...props }) {
    const theme = useTheme();
    return <TextField css={{ marginTop: theme.spacing(2) }} variant="outlined" fullWidth {...props} />;
}
