// 开发环境配置
const { resolve } = require('path')
const HtmlWenpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
                // 处理css
                test: /\.css$/,
                // use数组中是从右到左执行
                use:[
                    // 创建style标签，讲js样式放入head中
                    // 'style-loader',
                    // 取代style-loader，单独打包css
                    MiniCssExtractPlugin.loader,
                    // 将css文件编程commonjs模块加载js，里面是样式内容
                    'css-loader'
                ]
            },
        ]
    },
    // plugins插件配置
    plugins:[
        new HtmlWenpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 重命名
            filename: 'css/index.css'
        })
    ],
    mode: 'development'
}