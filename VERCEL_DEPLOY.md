# 使用 Vercel 部署（最简单的方法）

## 步骤 1：准备静态文件

已经完成！`out/` 目录已经包含了所有静态文件。

## 步骤 2：在 Vercel 部署

### 方法 A：通过 Vercel CLI（推荐）

1. 安装 Vercel CLI：
```bash
npm install -g vercel
```

2. 登录 Vercel：
```bash
vercel login
```

3. 部署：
```bash
cd /home/carmen/workshop/website
vercel --prod
```

4. 按照提示操作，Vercel 会自动：
   - 检测到 Next.js 项目
   - 部署静态文件
   - 生成一个链接（如：https://ems-swarm-hci.vercel.app）

### 方法 B：通过网页上传（如果 CLI 不可用）

1. 访问 https://vercel.com
2. 注册/登录账号
3. 点击 "Add New..." → "Project"
4. 选择 "Upload" 或 "Import Git Repository"
5. 如果选择 Upload：
   - 将 `out/` 目录压缩成 zip
   - 上传 zip 文件
   - Vercel 会自动解压并部署

## 步骤 3：访问网站

部署完成后，你会得到一个链接，格式如：
**https://ems-swarm-hci-xxx.vercel.app**

这个链接可以发给任何人访问！

