export const sendEmailResult = Object.freeze({
    accepted: 'accepted',
    notAccepted: 'notAccepted',
    error: 'error',
});

const postData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!(200 <= response.status && response.status < 300)) return sendEmailResult.error;
    const result = await response.json();
    return result.isAccepted ? sendEmailResult.accepted : sendEmailResult.notAccepted;
};

export async function sendEmail(type, properties) {
    const request = {
        type: type,
        properties: properties,
    };

    return await postData(
        'https://prod-31.westeurope.logic.azure.com:443/workflows/b9a0aaf4a81843bab7b6ee7529fb1c52/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=43eS4l0t_BFAWWd59bstBqNTVcwdaD-jHHRTBiUiOxA',
        request
    );
}
