const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * 开发环境将 /api 转发到后端。目标地址勿写死在仓库中，用 .env 配置 HTTP_PROXY_TARGET。
 * @see MAINTENANCE.md
 */
module.exports = function (app) {
  const target =
    process.env.HTTP_PROXY_TARGET ||
    process.env.REACT_APP_PROXY_TARGET ||
    'http://127.0.0.1:5000';

  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
      secure: process.env.HTTP_PROXY_REJECT_UNAUTHORIZED !== 'false',
    })
  );
};
