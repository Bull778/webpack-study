# webpack性能优化
* 开发环境性能优化
* 生产环境性能优化

## 开发环境性能优化
* 优化打包构建速度
  * HMR 对应内容热更新
* 优化代码调试
  * source-map 开发调试

## 生产环境性能优化
* 优化打包构建速度
  * oneOf 过滤loader，按需使用执行
  * babel缓存
  * 多进程打包
  * externals 忽略打包(使用cnd引入加快速度)
  * dll 单独打包(打包好，后期无需打包，直接使用)
* 优化代码运行的性能
  * 缓存(hash-chunkhash-contenthash)
  * tree shaking 去除无用代码（生产模式自动启用，开发需要使用es6模块化）
  * code split  代码分割
  * 懒加载/预加载
  * pwa 离线加载
  
**eslint配置**
```js
"eslintConfig": {
    "extends": "airbnb-base"
}
```
**css浏览器兼容处理**
```js
"browserslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  }

// 设置nodejs环境变量,webpack里配置
process.env.NODE_ENV = 'development';

```
