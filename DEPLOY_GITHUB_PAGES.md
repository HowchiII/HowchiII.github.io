# GitHub Pages 发布步骤

1. 登录 <https://github.com>。
2. 点右上角 `+`，选择 `New repository`。
3. 仓库名必须写成：`你的GitHub用户名.github.io`。
4. 选择 `Public`，然后创建仓库。
5. 上传这些文件：`index.html`、`styles.css`、`script.js`、`.nojekyll`、`README.md`。
6. 点 `Commit changes`。
7. 进入仓库的 `Settings` -> `Pages`。
8. 在 `Build and deployment` 里选择 `Deploy from a branch`。
9. Branch 选择 `main`，文件夹选择 `/root`，点 `Save`。
10. 等 1 到 2 分钟，打开 `https://你的GitHub用户名.github.io`。

如果你想用命令行发布，先把 `YOUR_USERNAME` 换成你的 GitHub 用户名：

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```
