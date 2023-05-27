import React from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

export default function TwoFields({ field1, field2 }) {
    const theme = useTheme();

    const fieldCss = css`
        flex: 1 1 0;
        margin-left: ${theme.spacing(1)};
        margin-right: ${theme.spacing(1)};
    `;

    return (
        <div
            css={{
                display: 'flex',
                flexDirection: 'column',
                '@media (min-width:600px)': {
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                marginLeft: '-' + theme.spacing(1),
                marginRight: '-' + theme.spacing(1),
            }}
        >
            <div css={fieldCss}>{field1}</div>
            <div css={fieldCss}>{field2}</div>
        </div>
    );
}
