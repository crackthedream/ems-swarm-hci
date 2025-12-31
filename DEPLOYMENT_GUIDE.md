# 网站部署指南

## 📦 方案一：GitHub Pages（推荐 - 完全免费）

### 步骤 1：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角 "+" → "New repository"
3. 填写信息：
   - Repository name: `ems-swarm-hci` (或你喜欢的名字)
   - Description: `EMS-based Directional Feedback for UAV Swarm Search`
   - 选择 **Public** (GitHub Pages 免费版需要公开仓库)
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

### 步骤 2：初始化 Git 并推送代码

在项目目录执行以下命令（**请替换 YOUR_USERNAME 为你的 GitHub 用户名**）：

```bash
cd /home/carmen/workshop/website

# 初始化 Git（如果还没有）
git init

# 添加远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/ems-swarm-hci.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: EMS Swarm HCI website"

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 3：部署到 GitHub Pages

**方法 A：使用 GitHub Actions（推荐）**

1. 在项目根目录创建 `.github/workflows/deploy.yml` 文件
2. 文件内容如下：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run export
      - uses: actions/configure-pages@v3
      - uses: actions/upload-pages-artifact@v2
        with:
          path: './out'
      - id: deployment
        uses: actions/deploy-pages@v2
```

3. 提交并推送：

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

**方法 B：手动部署（简单但需要每次手动操作）**

1. 在 GitHub 仓库页面，点击 "Settings" → "Pages"
2. 在 "Source" 下拉菜单选择 "Deploy from a branch"
3. Branch 选择 `main`，文件夹选择 `/ (root)`
4. 点击 "Save"
5. 等待几分钟，GitHub 会生成一个链接，格式如：
   `https://YOUR_USERNAME.github.io/ems-swarm-hci/`

### 步骤 4：配置 basePath（重要！）

如果仓库名不是 `ems-swarm-hci`，需要配置 basePath：

1. 编辑 `next.config.js`，添加 basePath：

```javascript
module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/ems-swarm-hci',  // 替换为你的仓库名
  assetPrefix: '/ems-swarm-hci',  // 替换为你的仓库名
};
```

2. 重新导出并推送：

```bash
npm run export
git add .
git commit -m "Update basePath for GitHub Pages"
git push
```

---

## 🚀 方案二：Vercel（最简单 - 推荐新手）

### 步骤 1：准备代码

确保代码已推送到 GitHub（参考方案一的步骤 2）

### 步骤 2：部署到 Vercel

1. 访问 [Vercel](https://vercel.com)
2. 点击 "Sign Up"，使用 GitHub 账号登录
3. 点击 "Add New..." → "Project"
4. 导入你的 GitHub 仓库
5. 配置项目：
   - Framework Preset: **Next.js**
   - Root Directory: `./` (默认)
   - Build Command: `npm run build` (Vercel 会自动识别)
   - Output Directory: `out`
6. 点击 "Deploy"
7. 等待 1-2 分钟，Vercel 会自动生成一个链接，格式如：
   `https://ems-swarm-hci.vercel.app`

### 步骤 3：自定义域名（可选）

1. 在 Vercel 项目页面，点击 "Settings" → "Domains"
2. 可以添加自定义域名（需要购买域名）

---

## 📋 方案对比

| 特性 | GitHub Pages | Vercel |
|------|-------------|--------|
| 费用 | 完全免费 | 免费（有使用限制） |
| 部署速度 | 较慢（需要 Actions） | 很快（1-2分钟） |
| 自定义域名 | 支持 | 支持 |
| 自动部署 | 需要配置 Actions | 自动（推送即部署） |
| 适合场景 | 学术项目、开源项目 | 快速部署、商业项目 |

---

## ✅ 部署后检查清单

- [ ] 所有页面可以正常访问
- [ ] 图片和视频可以正常加载
- [ ] 导航链接正常工作
- [ ] 移动端显示正常
- [ ] 暗色模式切换正常
- [ ] 滚动功能正常（进度条、返回顶部）

---

## 🐛 常见问题

### 问题 1：页面显示 404
- **原因**：basePath 配置错误
- **解决**：检查 `next.config.js` 中的 basePath 是否与仓库名一致

### 问题 2：资源（图片/视频）无法加载
- **原因**：路径问题
- **解决**：确保使用相对路径 `/media/xxx.mp4` 而不是绝对路径

### 问题 3：GitHub Pages 显示空白页
- **原因**：可能需要在仓库 Settings → Pages 中重新配置
- **解决**：选择正确的分支和文件夹

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 检查浏览器控制台（F12）的错误信息
2. 查看 GitHub Actions 或 Vercel 的构建日志
3. 确保所有依赖都已正确安装

