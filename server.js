const express = require('express');
const app = express();

// Status code descriptions
const statusDescriptions = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has succeeded and a new resource has been created as a result.",
    204: "No Content: The server successfully processed the request, but there is no content to return.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: The client must authenticate itself to get the requested response.",
    403: "Forbidden: The client does not have access rights to the content.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The request method is not supported for the requested resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is not ready to handle the request. This could be due to server maintenance or overloading.",
    504: "Gateway Timeout: The server is acting as a gateway and cannot get a response in time."
};

// GET endpoint for status info
app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code, 10);

    if (!code || !statusDescriptions[code]) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request: Invalid or unsupported status code provided."
        });
    }

    res.json({
        status: code,
        message: statusDescriptions[code]
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});