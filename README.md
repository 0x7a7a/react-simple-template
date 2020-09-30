# react-simple-template

> 一个简单的 React+TypeScript+Webpack 的前端脚手架.

### 安装

1.  `git clone https://github.com/zzzzzlucky/react-simple-template`
2.  `npm -i`或者`yarn install`

### 开发

`yarn start`

会自动打开默认浏览器,项目默认端口为 9000

你可以删除或者修改本项目的 git 配置,替换为为自己代码库的地址

### 开发环境配置

_VSCode_

-   安装[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)和[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

-   配置`Prettier`为代码默认格式化工具,打开 VSCode 配置项,其他配置项可以查看插件页面具体介绍

    ```js
    {
        "[typescript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": true
        },
        "[typescriptreact]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": true
        },
        //可选
        "[javascript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": true
        },
        //可选
        "[javascriptreact]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": true
        }
    }
    ```

_Webstorm_

-   安装 Postcss 插件
-   `Preferences | Languages & Frameworks | Style Sheets | Dialects| Project CSS Dialect`设置为`POSTCSS`,否则 css 文件如果用到了变量、嵌套等语法会报错.
-   `Preferences | Languages & Frameworks | JavaScript | Prettier | Run for files`添加需要格式化文件的后缀,参考:`{**/*,*}.{js,ts,jsx,tsx,css,scss,sass,less,json}`
-   可选:勾选 On Save.会在保存的时候自动执行格式化

---

```
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── LICENSE
├── README.md
├── package.json
├── postcss.config.js
├── src
│   ├── app.tsx
│   ├── assets
│   ├── components
│   ├── conf
│   ├── global.d.ts
│   ├── index.html
│   ├── layout
│   ├── models
│   ├── pages
│   └── utils
├── tsconfig.json
├── webpack.dev.js
├── webpack.pro.js
└── yarn.lock
```

-   `src/index.html`项目入口模版
-   `src/app.tsx`项目入口文件
-   `src/global.d.ts`文件、css 等声明

-   `assets`csss 和图片等资源文件目录
-   `components`公共组件
-   `conf`配置文件
-   `layouts`模版文件
-   `models`项目中会用到的数据模型
-   `pages`前端页面文件,内部可根据业务再细分
-   `utils`会用到的工具类,例如 request、timeformat 等

### 主要依赖

#### [postcss](https://github.com/postcss/postcss)

[precss:](https://github.com/jonathantneal/precss) 主要增加了`precss`作为 sass-like 的预处理,包括变量声明、样式嵌套、继承等功能

[autoprefixer:](https://github.com/postcss/autoprefixer) 自动增加 css 的浏览器兼容前缀,默认为`default`

#### [prettier](https://github.com/prettier/prettier)

格式化代码,具体配置见`.prettierrc.js`文件

#### [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

[eslint-plugin-react:](https://github.com/yannickcr/eslint-plugin-react) react 相关的 lint 规则

[eslint-plugin-prettier:](https://github.com/prettier/eslint-plugin-prettier) 解决因格式造成的 prettier 和 eslint 的冲突问题

[eslint-config-prettier:](https://github.com/prettier/eslint-config-prettier) 关闭所有不必要的或可能与 prettier 冲突的规则

### 写在最后

该项目只是一个最为基础的目录划分和基础依赖配置,项目中可能会用到更多的 npm package,需要你自己手动引入.

当然,如果该项目中你觉得哪里不合适或者有更佳的选择,更好的配置,欢迎提交 PR 一起维护和更新.

这里我列一些常用库作为可选项:

-   Http Request:
    -   [axios:](https://github.com/axios/axios) 常用的 http 请求库
    -   [qs:](https://github.com/ljharb/qs) 搭配 axios,用于请求前的参数编码
-   React Router:
    -   [react-router:](https://github.com/ReactTraining/react-router) 项目页面路由管理
-   状态管理:
    -   [rematch:](https://rematch.gitbook.io) 比 redux 更好用的一个状态管理
-   Webpack Plugins:
    -   [mini-css-extract-plugin:](https://github.com/webpack-contrib/mini-css-extract-plugin) 提取项目中的 css 到独立的文件
