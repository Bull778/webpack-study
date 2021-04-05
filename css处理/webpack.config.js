const { resolve } = require('path')

module.exports ={
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
                // 匹配文件
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
                // 匹配文件
                test: /\.less$/,
                // use数组中是从右到左执行
                use:[
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css
                    'less-loader'
                ]
            }
        ]
    },
    // plugins插件配置
    plugins:[

    ],
    mode: 'development',
    // mode:'production'
}