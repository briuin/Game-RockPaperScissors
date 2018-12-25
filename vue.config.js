const merge = require('webpack-merge');
const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "./docs"),
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => {
                return merge(options, {
                    limit: 10000
                })
            })
    },
    configureWebpack: {
        // No need for splitting
        optimization: {
            splitChunks: false
        }
    },
    css: {
        modules: true,
        extract: false
    },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
    },
}
