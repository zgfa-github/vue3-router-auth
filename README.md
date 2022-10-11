# 用vue3学习路由权限：分别用到如下知识

客户端client

## vite脚手架工具构建
```
npm init vite@latest 详情参考官网
```
- vite.config.ts  配置参数  详情参考官网

## vue3框架

- 组合api写法，更加容易抽离管理维护代码
- vue3+ts

## vue-router4.0版本以上

## vuex@next 版本  (官网都有详细介绍，要学会学习)
```
- state
- actions
- mutations
- 常量声明  export const SET_AUTH: string = 'SET_AUTH';
```
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

写入 npx lint-staged
在package.json文件中增加如下：
"lint-staged": {
    "src/**/*.{js,ts,vue}": [
      "eslint --fix",
      "git add"
    ]
  }

## 任何事物都是有思路和方法的，大概有个思路指引自己

## element-Plus 必须看官网写代码，包括一些属性，要不效率非常低，自己又累

## 路由权限的思路

- 先从后台获取路由数据（侧边栏菜单数据结构）
- 因为后台都是数据都是平级的，所以拿过来后需要转树状结构
- 再生成路由映射表结构，用 router.addRoute()方法，动态添加路由（看官网介绍用法）

## 登录后显示相对应的路由，在mock模拟了后端返回的路由数据

## router.beforeEach(to,from,next)  路由导航守卫

- 要看官网搞懂 to from next的含义，否则又浪费时间在这里，效率好低
- 要明白如下三个情况的跳转情况
- next()
- next('/')
- next({path: '/'})

## flex 知识的理解很重要，那就可以布局很多高级的布局

- .asnwer{flex: 0 0 100px}，例如这样的方式，解决了我因为.a{position:fixed}带来的脱离文档流问题布局
- 详情见 F盘有示例介绍

```
<div>
<div class="asnwer">111</div>
<div class="a">222</div>
<div class="b">333</div>
</div>
```

- 通过动态绑定样式 :style="{样式名:三目运算符}"
还可以通过计算属性方式，具体看官网或者百度

## 要是用ts写程序，还是先规划好数据先，再写出声明文件，然后在Mock模拟接口

## 父子之间传参，父子之间通信

- 在ts中怎么写
/**defineEmits 父子之间触发监听事件写法

- 这是typescript写法
- 通过子组件触发，传参过去，父组件接受参数修改
 */
// const emit = defineEmits<{
//     (e: 'CurrentHander', currentNum: number): void;
//     (e: 'changeCancle', bool: boolean): void;
//     (e: 'update', value: string): void;
// }>();

- 不在ts中又是怎么写
- 总之写法上有区别
- 生命钩子函数hook,那些钩子在setup中运行 ,比如onMouted

## watch toRefs withDefaults 使用

### 总结：掌握基础知识很重要啊，万丈高楼平地起

#### 思路/想法也很重要
`Object.prototype.toString.call()`
> 思路决定你的出路
>> 人要有想法和主见
>>> 平和心态，沉着冷静，静心
