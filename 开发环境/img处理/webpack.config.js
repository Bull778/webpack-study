const { resolve } = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                // 处理不了html中的图片
                // 图片小于8kb，就会被base64处理
                // 优点：减少请求数量（减轻服务器压力）
                // 缺点：图片体积更大（文件请求速度更慢了）
                // 需要下载两个loader，url-loader依赖于file-loader
                // 踩坑：一个loader的时候不要用[]包裹着
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
                            name: '[hash:10].[ext]'
                        }
                    }
                ]  
            },
            {
                // 负责处理html文件的img图片（负责引入img，从而被url-loader打包处理）
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                      //webpack4可以不用写
                    esModule: false
                  }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}