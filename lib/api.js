import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_RESET_API_KEY

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://localhost:1337',
    headers: { 'Content-Type': 'application/json' },
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});

// Request interceptor
api.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default api;