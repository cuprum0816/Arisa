<div align="center"><h1>Arisa</h1>
<img src="https://github.com/cuprum0816/Arisa/blob/4453721d3cc421ec638a0ceded01a573ddd22f99/resources/icon.png" alt="Arisa Logo" width="200">
<p></p>
<p>数据清洗及可视化教育软件</p>
</div>

## 开发环境设置

### 安装

要安装项目依赖项，请在项目目录下执行`npm install`。

### 开发

在开发环境下运行项目，请在项目目录下执行`npm run dev`

### 编译

本软件采用electron-vite方式构建。您不需要安装诸如electron-forge等额外打包工具（强烈不建议安装），并请采用electron-builder方式构建项目。
```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
