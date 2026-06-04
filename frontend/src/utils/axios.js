import axios from 'axios';

// Determine baseURL safely: prefer explicit VITE_API_URL; if missing and
// we're running a production build, fall back to the deployed backend URL.
// Local development remains unaffected.
const determineBaseUrl = () => {
  const explicit = import.meta.env.VITE_API_URL;
  if (explicit) return explicit;
  if (import.meta.env.MODE === 'production') {
    return 'https://feasty-z82k.onrender.com';
  }
  return 'http://localhost:8000';
};

const instance = axios.create({
  baseURL: determineBaseUrl(),
  withCredentials: true,
});

export default instance;
