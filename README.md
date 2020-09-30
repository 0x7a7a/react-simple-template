# react-simple-template

> 一个简单的 React+TypeScript+Webpack 的前端脚手架.

### 安装

1.  `git clone https://github.com/zzzzzlucky/react-simple-template`
2.  `npm -i`或者`yarn install`

### 开发

`yarn start`

(默认端口为:9000)

### 项目主要文件和目录划分

├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── LICENSE
├── README.md
├── package.json
├── postcss.config.js
├── src
│ ├── app.tsx
│ ├── assets
│ ├── components
│ ├── conf
│ ├── global.d.ts
│ ├── index.html
│ ├── layout
│ ├── models
│ ├── pages
│ └── utils
├── tsconfig.json
├── webpack.dev.js
└── yarn.lock

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

[precss](https://github.com/jonathantneal/precss)主要增加了`precss`作为 sass-like 的预处理,包括变量声明、样式嵌套、继承等功能

[autoprefixer](https://github.com/postcss/autoprefixer)自动增加 css 的浏览器兼容前缀,默认为`default`

#### [prettier](https://github.com/prettier/prettier)

格式化代码,具体配置见`.prettierrc.js`文件

#### [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)react 相关的 lint 规则

[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)解决因格式造成的 prettier 和 eslint 的冲突问题

[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)关闭所有不必要的或可能与 prettier 冲突的规则
