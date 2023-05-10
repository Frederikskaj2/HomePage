import React from 'react';
import Link from '@mui/material/Link';

export default function Pdf({ pdf, image, text }) {
    // eslint-disable-next-line react/jsx-no-target-blank
    return (
        <Link href={pdf} color="secondary" underline="hover" target="_blank">
            {image ? <img css={{ width: '100%' }} src={image} alt={text} /> : <span>{text}</span>}
        </Link>
    );
}
