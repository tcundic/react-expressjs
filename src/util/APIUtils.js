import API_BASE_URL from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const defaults = { headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .catch(error => Promise.reject(error));
};

export default function submitContactForm(requestBody) {
    return request({
        url: `${API_BASE_URL}/contact`,
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
};