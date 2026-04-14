const STORAGE_KEY = 'hkust_quant_user';

/**
 * 从登录接口响应中解析 token（兼容多种常见字段名；需与后端约定一致）。
 */
export function getAuthTokenFromPayload(payload) {
  if (!payload || typeof payload !== 'object') return null;
  return (
    payload.token ||
    payload.accessToken ||
    payload.jwt ||
    (payload.user && (payload.user.token || payload.user.accessToken)) ||
    null
  );
}

export function saveUserAuth(payload) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* ignore quota / private mode */
  }
}

export function loadUserAuth() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearUserAuth() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function getStoredAuthToken() {
  return getAuthTokenFromPayload(loadUserAuth());
}
