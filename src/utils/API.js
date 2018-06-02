import axios from 'axios';

export const API_URL = 'http://localhost:3030/api';

export const createRegister = data => axios.post(`${API_URL}/user`, data);
export const getProducts = data => axios.get(`${API_URL}/products`, data);
