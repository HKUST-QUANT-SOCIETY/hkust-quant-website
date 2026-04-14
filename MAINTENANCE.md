# HKUST Quant 网站前端维护说明

本文档说明本地开发、环境变量、安全相关改动与后续维护要点（对应此前 P0–P2 整改）。

## 快速开始

```bash
cp .env.example .env   # 首次克隆后复制环境变量模板（若本地尚无 .env）
npm install
npm start              # http://localhost:3000
npm run build          # 产出 build/ 用于部署
```

`.env` 已加入 `.gitignore`，请勿将含密钥或内网地址的配置提交到仓库。

---

## 环境变量

| 变量 | 作用 |
|------|------|
| `REACT_APP_API_BASE_URL` | Axios 请求基地址。**留空**时使用当前页面 origin（开发时请求 `/api`，由 `src/setupProxy.js` 转发到后端）。若需浏览器直连某台 API 服务器，再设为例如 `http://127.0.0.1:5000`。 |
| `REACT_APP_API_WITH_CREDENTIALS` | 设为 `true` 时，`axios` 携带 Cookie（`withCredentials`）。需后端 CORS 正确配置 `credentials`。 |
| `HTTP_PROXY_TARGET` | **仅开发**：`npm start` 时把 `/api` 代理到的目标（默认 `http://127.0.0.1:5000`）。勿在仓库中写死生产/内网 IP。 |
| `HTTP_PROXY_REJECT_UNAUTHORIZED` | 设为 `false` 时，开发代理访问 HTTPS 后端可跳过证书校验（仅调试自签证书时使用）。 |

生产构建时，请在部署平台配置 `REACT_APP_*`，使线上站点指向正确的 API 域名或同源路径。

---

## 认证与管理员接口（P0）

1. **登录响应约定**  
   登录成功接口 `POST /api/users/login` 的 JSON 中应包含可用于鉴权的 token，字段名支持其一即可：`token`、`accessToken`、`jwt`，或嵌套在 `user.token` / `user.accessToken`。  
   前端会将完整响应存入 `localStorage`（键名由 `src/auth/authStorage.js` 管理），并在后续 Axios 请求中自动附加：  
   `Authorization: Bearer <token>`。

2. **后端必须校验**  
   管理类接口（如保存/删除新闻、上传图片 URL 等）**必须在服务端验证**该 Bearer token（或 Cookie 会话），不能仅依赖前端路由 `/adminPage` 的隐藏。

3. **登出**  
   调用 `AuthContext` 的 `logout()` 会清除本地存储并派发 `USER_SIGNOUT`。

4. **Markdown 与 XSS**  
   已移除 `rehype-raw`，新闻/活动详情中的 Markdown **不再渲染原始 HTML 标签**，以降低存储型 XSS 风险。若业务必须嵌入 HTML，应改为后端可信消毒 + 白名单方案，再单独评估前端渲染方式。

---

## 依赖与安全（P1–P2）

- **已升级**：`axios`、`react-router-dom`、`http-proxy-middleware`、`swiper`（v12）等，以降低已知漏洞风险。  
- **已移除**：npm 包 `crypto`（与 Node 内置模块易混淆且未使用）、`rehype-raw`、未使用的 `@craco/craco` 及 **`craco.config.js`**（项目脚本始终为 `react-scripts`，未使用 CRACO）。  
- **`npm audit`**：Create React App 与部分传递依赖仍可能报告问题；可定期执行 `npm audit`，在不影响构建的前提下再执行 `npm audit fix`，重大升级需回归测试。  
- **`xlsx`**：仅用于报名表单**生成** Excel（`json_to_sheet` / `write`），不解析用户上传的表格；`npm audit` 对该包可能仍提示无修复版本，需关注上游或替代方案。  
- **`imgbox-js`**：若仍嵌套旧版 `axios`，与主项目 `axios` 版本可能不一致；后续可考虑替换或升级该依赖。

---

## 开发代理说明

- 当 `REACT_APP_API_BASE_URL` **为空**时，浏览器请求相对路径 `/api/...` 会发到当前 dev server（如 `:3000`），由 `setupProxy.js` 转发到 `HTTP_PROXY_TARGET`。  
- 若将 `REACT_APP_API_BASE_URL` 设为完整 URL，则请求**不经过**该代理，会直接访问所填主机。

---

## 目录与脚本

| 路径 | 说明 |
|------|------|
| `src/config/axiosConfig.js` | Axios 基地址、可选 Cookie、请求头注入 Bearer token（需在 `index.js` 最先 import）。 |
| `src/auth/authStorage.js` | 登录信息本地存储与 token 解析。 |
| `src/setupProxy.js` | 开发环境 `/api` 代理。 |

---

## 部署检查清单（建议）

- [ ] 生产环境已配置 `REACT_APP_API_BASE_URL`（或同源反代，使 `/api` 指向后端）。  
- [ ] 后端 HTTPS、CORS、鉴权与速率限制已就绪。  
- [ ] 仓库中无内网 IP、数据库口令等敏感信息。  
- [ ] 发布前执行 `npm run build` 并通过基本回归（首页、新闻列表与详情、管理后台登录与发文）。

---

## 变更记录摘要（维护用）

- 统一 Axios 配置与 Bearer 鉴权；登录态持久化至 `localStorage`，刷新页面可保持登录（在 token 未过期前提下）。  
- 移除 Markdown 中 raw HTML 渲染；代理目标改为环境变量。  
- 依赖升级与死代码/冗余配置清理见上文。
