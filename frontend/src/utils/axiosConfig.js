import axios from 'axios';

// Create an instance of axios with default configuration
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL // Use environment variable for base URL
});

export default instance;