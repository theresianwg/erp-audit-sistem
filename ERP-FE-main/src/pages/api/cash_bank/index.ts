import axios from 'axios';

const cashBankApi = axios.create({
  baseURL: 'http://localhost:3013/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { cashBankApi };
