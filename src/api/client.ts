import axios from 'axios';

import { NEWS_API_BASE_URL } from '../constants';

export const httpNewsClient = axios.create({
  baseURL: NEWS_API_BASE_URL,
  timeout: 15000,
});
