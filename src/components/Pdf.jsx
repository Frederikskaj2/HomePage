import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

function Image({ image, text, overlay }) {
    const theme = useTheme();
    return (
        <div
            css={{
                position: 'relative',
            }}
        >
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
            {overlay && (
                <div
                    css={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: theme.spacing(64),
                        height: theme.spacing(64),
                        overflow: 'hidden',
                    }}
                >
                    <div
                        css={{
                            transform: 'rotate(0.125turn) translate(31%)',
                            padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
                            color: theme.palette.text.secondary,
                            background: theme.palette.grey[200],
                            textAlign: 'center',
                        }}
                    >
                        {overlay}
                    </div>
                </div>
            )}
        </div>
    );
}
export default function Pdf({ pdf, image, text, overlay }) {
    // eslint-disable-next-line react/jsx-no-target-blank
    return (
        <Link href={pdf} color="secondary" underline="hover" target="_blank">
            {image ? <Image image={image} text={text} overlay={overlay} /> : <span>{text}</span>}
        </Link>
    );
}
