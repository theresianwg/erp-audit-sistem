import axios from 'axios';

const generalLedgerApi = axios.create({
  baseURL: 'http://localhost:3003/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { generalLedgerApi };
