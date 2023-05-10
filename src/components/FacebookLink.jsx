import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function FacebookLink({ href, children }) {
    return (
        <Typography variant="body1" component="p" paragraph>
            <Link
                href={href}
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                color="secondary"
                underline="hover"
            >
                <FacebookIcon css={{ verticalAlign: 'bottom' }} color="primary" />
                {children}
            </Link>
        </Typography>
    );
}
