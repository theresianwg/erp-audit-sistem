import axios from 'axios';
require('dotenv').config();

function getBaseUrl() {
  // Jika menjalankan script "dev", gunakan URL lokal
  if (process.env.NODE_ENV === 'development') {
    return process.env.NEXT_PUBLIC_API_LOCAL_URL_ACCOUNT_PAYABLE_MODULE;
  }
  // Jika menjalankan script "build", gunakan URL dev
  else if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_API_DEV_URL_ACCOUNT_PAYABLE_MODULE;
  }
}

const accountPayableApi = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export { accountPayableApi };
