import React from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function DoubleTextFields({
    name1,
    label1,
    helperText1,
    inputProps1,
    name2,
    label2,
    helperText2,
    inputProps2,
}) {
    const theme = useTheme();

    const fieldCss = css`
        flex: 1 1 0;
        margin-left: ${theme.spacing(1)};
        margin-right: ${theme.spacing(1)};
        margin-bottom: ${theme.spacing(2)};
    `;

    const [required1, setRequired1] = React.useState(true);
    const [required2, setRequired2] = React.useState(true);

    const handleChange1 = (event) => {
        const value = event.target.value.trim();
        setRequired2(value.length === 0);
    };

    const handleChange2 = (event) => {
        const value = event.target.value.trim();
        setRequired1(value.length === 0);
    };

    return (
        <div
            css={{
                display: 'flex',
                flexDirection: 'column',
                '@media (min-width:600px)': {
                    flexDirection: 'row',
                    alignItems: 'top',
                },
                marginTop: theme.spacing(2),
                marginLeft: '-' + theme.spacing(1),
                marginRight: '-' + theme.spacing(1),
            }}
        >
            <TextField
                css={fieldCss}
                name={name1}
                label={label1}
                helperText={helperText1}
                inputProps={inputProps1}
                required={required1}
                onChange={handleChange1}
            />
            <TextField
                css={fieldCss}
                name={name2}
                label={label2}
                helperText={helperText2}
                inputProps={inputProps2}
                required={required2}
                onChange={handleChange2}
            />
        </div>
    );
}
