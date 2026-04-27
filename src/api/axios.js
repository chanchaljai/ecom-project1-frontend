import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecom-project1-backend-1.onrender.com',
    withCredentials: true,
});

export default api;