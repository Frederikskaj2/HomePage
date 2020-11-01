import React from 'react';

export default ({ src, title, ...props }) => (
    <div className="video-container">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <video controls>
            <source src={src} type="video/mp4" />
        </video>
    </div>
);
