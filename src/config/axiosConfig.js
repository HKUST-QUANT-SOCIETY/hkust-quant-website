import axios from 'axios';
import { getStoredAuthToken } from '../auth/authStorage';

/**
 * 空字符串表示使用当前页面 origin（开发时可走 CRA 代理 /api）。
 * 若直连后端，在 .env 中设置 REACT_APP_API_BASE_URL，例如 http://127.0.0.1:5000
 */
const baseURL = process.env.REACT_APP_API_BASE_URL ?? '';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Accept'] = 'application/json';

if (process.env.REACT_APP_API_WITH_CREDENTIALS === 'true') {
  axios.defaults.withCredentials = true;
}

axios.interceptors.request.use((config) => {
  const token = getStoredAuthToken();
  if (token) {
    config.headers = config.headers || {};
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
