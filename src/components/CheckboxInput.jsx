import React from 'react';
import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CheckboxInput({ label }) {
    const theme = useTheme();
    return (
        <FormControlLabel
            css={{ marginTop: theme.spacing(3) }} 
            control={<Checkbox color="primary" />}
            label={label}
        />
    );
}
