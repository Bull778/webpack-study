const {resolve} = require('path')
const HtmlWenpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        // 插件会自动引入css，js文件
        // 功能：默认创建一个空的html，需要template配置复制文件
        new HtmlWenpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'

}