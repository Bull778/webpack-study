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
                //  js兼容 ：babel-loader不能转换promise
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets: [
                        [
                          '@babel/preset-env',
                          {
                            // 按需加载
                            useBuiltIns: 'usage',
                            // 指定core-js版本
                            corejs: {
                              version: 3
                            },
                            // 指定兼容性做到哪个版本浏览器
                            targets: {
                              chrome: '60',
                              firefox: '60',
                              ie: '9',
                              safari: '10',
                              edge: '17'
                            }
                          }
                        ]
                    ]
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