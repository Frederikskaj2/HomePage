import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

export default function Pdf({ pdf, image, text }) {
    const theme = useTheme();
    console.log(theme.palette);

    // eslint-disable-next-line react/jsx-no-target-blank
    return (
        <Link href={pdf} color="secondary" underline="hover" target="_blank">
            {image ? (
                <img
                    css={{
                        width: '100%',
                        outlineStyle: 'solid',
                        outlineColor: theme.palette.primary.main,
                        '&:hover': {
                            outlineColor: theme.palette.secondary.main,
                        },
                    }}
                    src={image}
                    alt={text}
                />
            ) : (
                <span>{text}</span>
            )}
        </Link>
    );
}
