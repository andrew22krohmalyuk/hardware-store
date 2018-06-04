import axios from 'axios';

export const API_URL = 'http://localhost:3030/api';

export const createRegister = data => axios.post(`${API_URL}/user`, data);
export const createLogin = data => axios.post(`${API_URL}/login`, data);
export const getProducts = data => axios.get(`${API_URL}/products`, data);
export const addProducts = data => axios.post(`${API_URL}/products`, data);
export const editProducts = (data, id) => axios.put(`${API_URL}/products/${id}`, data);
export const deleteProducts = id => axios.delete(`${API_URL}/products/${id}`);
