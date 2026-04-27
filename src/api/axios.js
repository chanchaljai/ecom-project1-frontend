import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecom-project1-backend-1.onrender.com/api',
    withCredentials: true,
});

export default api;