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
