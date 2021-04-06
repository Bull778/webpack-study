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
                // 处理css
                test: /\.css$/,
                // use数组中是从右到左执行
                use:[
                    // 创建style标签，讲js样式放入head中
                    'style-loader',
                    // 将css文件编程commonjs模块加载js，里面是样式内容
                    'css-loader'
                ]
            },
            {
                // 处理less
                test: /\.less$/,
                // use数组中是从右到左执行
                use:[
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css
                    'less-loader'
                ]
            },
            {
                // 处理图片 
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            esModule: false,
                            // 给图片进行重命名
                            // [hash:10]取图片的hash的前10位
                            // [ext]取文件原来扩展名
                            name: '[hash:10].[ext]',
                            outputPath: 'img'
                        }
                    }
                ] 
            },
            {
                // 处理html中的img
                test: /\.html$/,
                loader:'html-loader',
                options: {
                    esModule: false,
                }
                
            },
            // 打包其他资源,排除法
            {
                exclude: /\.(css|html|js|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: { 
                    name: '[hash:10].[ext]',
                    outputPath: 'icon'
                }
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