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
            {
                //  只检查自己的,node_modules/别人已经检查过了，不用检查
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options:{
                    // 自动修复错误
                    fix:true
                }
            }
            
        ]
    },
    // plugins插件配置
    plugins:[
        new HtmlWenpackPlugin({
            template: './src/index.html'
        }),
    ],
    mode: 'development'
}