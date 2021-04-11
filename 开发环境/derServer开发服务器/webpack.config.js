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

    // 开发服务器，自动构建打包，自动编译，自动打开浏览器和刷新
    // 优点只会在内存中编译打包，不会有任何输出
    // 启动指令：npx webpack-dev-server
    // webpack5命令为：npx webpack serve
    devServer: {
        contentBase: resolve(__dirname,'build'),
        // 启动gzip压缩
        compress: true,
        // 端口
        port: 3000,
        // 自动打开浏览器
        open: true
    }
}