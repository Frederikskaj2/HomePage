import React, { useEffect } from 'react';

export default function RefreshingIFrame({ src, title, ...props }) {
    useEffect(() => {
        require('../../static/refreshing-iframe.js');
    }, []);

    return (
        <div className="iframe-container">
            <iframe id="refreshing-iframe" title={title} src={src} loading="lazy" {...props}></iframe>
        </div>
    );
}
