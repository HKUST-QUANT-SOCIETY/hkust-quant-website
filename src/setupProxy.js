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

  // 招募申请走 recruitment-server（默认 :8787）。
  // 注意：Express 的 app.use(前缀, 中间件) 会把 req.url 改写为去掉前缀的剩余路径，
  // http-proxy-middleware 直接转发改写后的 url，导致后端只会收到 '/'。
  // 因此用过滤器函数判断（不改写 req.url）而不是路径挂载。
  // 生产环境由 nginx / Vercel rewrite 把 /api/applications 路由到该服务。
  const recruitTarget =
    process.env.RECRUIT_PROXY_TARGET || 'http://127.0.0.1:8787';

  app.use(
    createProxyMiddleware({
      target,
      changeOrigin: true,
      secure: process.env.HTTP_PROXY_REJECT_UNAUTHORIZED !== 'false',
    })
  );

  app.use(
    createProxyMiddleware({
      target: recruitTarget,
      changeOrigin: true,
      secure: process.env.HTTP_PROXY_REJECT_UNAUTHORIZED !== 'false',
      // 招募相关前缀 → recruitment-server
      pathFilter: (pathname) =>
        pathname.startsWith('/api/health') ||
        pathname.startsWith('/api/export') ||
        pathname.startsWith('/api/applications'),
    })
  );
};
