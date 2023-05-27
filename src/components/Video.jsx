import React from 'react';

export default function EmbeddedVideo({ src, title, ...props }) {
    return (
        <div className="video-container">
            {/* eslint-disable jsx-a11y/media-has-caption */}
            <video controls>
                <source src={src} type="video/mp4" {...props} />
            </video>
        </div>
    );
}
