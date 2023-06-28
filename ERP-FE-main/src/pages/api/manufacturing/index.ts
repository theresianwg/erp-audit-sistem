import axios from 'axios';

const manufacturingApi = axios.create({
  baseURL: 'http://localhost:3020/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { manufacturingApi };
