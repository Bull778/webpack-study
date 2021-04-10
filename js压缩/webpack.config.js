// 开发环境配置
const { resolve } = require('path')
const HtmlWenpackPlugin = require('html-webpack-plugin')

module.exports ={
    // webpack配置
    // 入口
    entry: './src/js/index.js',
    // 输出
    output:{
        // 输出文件名
        filename: 'js/built.js',
        // 输出路径
        // __dirname node.js变量,代表当前绝对路径
        path:resolve(__dirname,'build')
    },
    // loader配置
    module:{
        // 规则设置,不同文件不同配置
        rules:[
        ]
    },
    // plugins插件配置
    plugins:[
        new HtmlWenpackPlugin({
            template: './src/index.html'
        }),
    ],
    // 直接切换生成环境就可以压缩了
    mode: 'production'
}