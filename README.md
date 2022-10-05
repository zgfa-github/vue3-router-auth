# 用vue3学习路由权限：分别用到如下知识

客户端client
## vite脚手架工具构建

- npm init vite@latest 详情参考官网

- vite.config.ts  配置参数  详情参考官网

## vue3框架
- 组合api写法，更加容易抽离管理维护代码
- vue3+ts

## vue-router4.0版本以上

## vuex@next 版本  (官网都有详细介绍，要学会学习)

- state
- actions
- mutations
- 常量声明  export const SET_AUTH: string = 'SET_AUTH';

## vite-plugin-mock模拟数据

## 工具函数utils

- 对路由数据的计算，实质就是算法+数据

服务端 server

## express

- 模拟了数据，不是数据库，简单的json 

- @types/express  针对于ts声明文件的包

- ts-node-dev 服务器启动

- body-parser 中间件获取前端请求发过来数据

## 设计方案的落地

- 先搭建好基本架构（框架的架构）

- 然后整体思路设计（根据业务需求），数据结构如何组织（声明文件类型的*.d.ts），业务逻辑流程是如何的(最好是画图比较直观，一目了然)

- 再动手开发，函数或者某些概念不熟悉的情况，第一时间结合查询官网，再结合百度搜索

## git代码提交规范
- 安装 commitizen cz-customizable
- 在package.json中进行新增
"config": {
    "commitizen": {
        "path": "node_modules/cz-customizable"
    }
}
- 在根目录下新建.cz-config.js 写配置之后，就可以用git cz代替git commit

## 另外一种，使用husky进行强制git代码提交规范
- pnpm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
- npm install husky@7.0.1 --save-dev
- npx husky install  初始化
- 在package.json中进行新增指令并执行
"prepare": "husky install"
执行 npm run prepare

## 使用husky进行强制代码格式化规范
- npx husky add .husky/commit-msg  会生成一个文件commit-msg
- 写入 npx --no-install commitlint --edit
- npx husky add .husky/pre-commit  会生成一个文件pre-commit

- 写入 npx lint-staged
在package.json文件中增加如下：
"lint-staged": {
    "src/**/*.{js,ts,vue}": [
      "eslint --fix",
      "git add"
    ]
  }

## 加油88
