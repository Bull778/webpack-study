const { resolve } = require('path')
const HtmlWenpackPlugin = require('html-webpack-plugin')
module.exports = {
    // webpack配置
    // 入口
    entry: './src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        // __dirname node.js变量,代表当前绝对路径
        path:resolve(__dirname,'build')
    },
    // loader配置
    module:{
        // 规则设置,不同文件不同配置
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // 打包其他资源,排除法
            {
                exclude: /\.(css|html|js|less|sass)/,
                loader: 'file-loader'
            }
        ]
    },
    // plugins插件配置
    plugins:[
        new HtmlWenpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // mode:'production'
}