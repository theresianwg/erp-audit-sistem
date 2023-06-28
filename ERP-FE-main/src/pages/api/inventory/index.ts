import axios from 'axios';

const inventoryApi = axios.create({
  //baseURL: 'http://localhost:3001/api' || 'http://139.59.121.157:3001/api/',
  baseURL: 'http://localhost:3001/api',
});

export { inventoryApi };
