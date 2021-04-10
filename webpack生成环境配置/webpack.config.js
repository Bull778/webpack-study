const { resolve } = require('path')
const { MiniCssExtractPlugin } = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWenpackPlugin = require('html-webpack-plugin')

// 设置nodejs环境变量
process.env.NODE_ENV = 'development';

commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        // package.json配置适配那些浏览器
        loader: 'postcss-loader',
        ident: 'postcss',
        options: {
            postcssOptions: {
                plugins: [
                    require('postcss-preset-env')()
                ]
            }
        }
    }
]
module.exports = {
    entry: './src/js/index.js',
    output:{
        filename: 'js/build.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[...commonCssLoader]
            },
            {
                test: /\.less$/,
                use:[...commonCssLoader,'less-loader']
            },
            {
                // 先执行eslint再执行babel
                test: /\.js$/,
                exclude: /node_modules/,
                // 优先执行配置
                enforce: 'pre',
                loader: 'eslint-loader',
                options:{
                    fix: true
                }
            },
            {
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
            },
            {
                // 先执行eslint再执行babel
                test: /\.(jpn|png|gif)/,
                loader: 'url-loader',
                options:{
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs',
                    esModule: false
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    //webpack4可以不用写
                  esModule: false
                }
            },
            {
                exclude: /\.(js|css|less|html|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/puilt.css'
        }),
        // 压缩css
        new CssMinimizerWebpackPlugin(),
        new HtmlWenpackPlugin({
            template: './src/index.html',
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
              }
        }),
    ],
    mode: 'production'
}