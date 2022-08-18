// npm  install  path  --save
const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/project/' : '/',
    devServer: {
        disableHostCheck: true,
        //代理
        proxy: {
            "/api": {
                target: 'https://www.mxnzp.com/api/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    //@路径配置
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
    },
}
