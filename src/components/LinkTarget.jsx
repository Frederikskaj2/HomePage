import React from 'react';

export default function LinkTarget({ name, children }) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
            css={{
                color: 'inherit',
                textDecoration: 'none',
            }}
            name={name}
        >
            {children}
        </a>
    );
}
