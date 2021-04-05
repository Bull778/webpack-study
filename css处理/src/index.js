/* 
开发环境: webpack ./src/index.js -0 . /build --mode=development
webpack会以./src/index.js 为入口文件开始打包，打包后输出到. /build/main.js
整体打包环境，是开发环境

生产环境: webpack ./src/index.js -o ./build --mode=production
webpack会以./src/index.js 为入口文件开始打包，打包后输出到. /build/main.js
整体打包环境，是生产环境
*/
import './index.css';
import './index.less'
// function add(a,b) {
//    return a+b;
// }

// console.log(add(1,2));