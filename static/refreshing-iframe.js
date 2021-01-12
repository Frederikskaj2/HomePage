if (typeof window !== 'undefined' && window.document) {
    const frame = document.getElementById('refreshing-iframe');
    if (frame) {
        const interval = 10*60*1000;
        const refreshIframe = () => {
            // eslint-disable-next-line no-self-assign
            frame.src = frame.src;
            window.setTimeout(refreshIframe, interval);
        };
        window.setTimeout(refreshIframe, interval);
    }
}
