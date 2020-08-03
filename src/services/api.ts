import axios from 'axios';

const api = axios.create({
  baseURL: 'http://challenge.goomer.com.br/restaurants',
});

export default api;
