import axios from 'axios';
import * as endpoint from '../constants/endpoints';

const instance = axios.create({
  baseURL: endpoint.BASE_URL,
});

export default instance;
