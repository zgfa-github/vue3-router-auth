# 用vue3学习路由权限：分别用到如下知识

客户端client
## vite脚手架工具构建

- npm init vite@latest 详情参考官网

- vite.config.ts  配置参数  详情参考官网

## vue3框架

- vue3+ts

## vue-router4.0版本以上

## vuex@next 版本

- state
- actions
- mutations
- 常量声明  写法[]

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