module.exports = {
    productionSourceMap: false,
    // publicPath: '/VUE',
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    // devServer: {
    //     host: '0.0.0.0',
    //     port: 8082,
    //     proxy: {
    //         '/API': {
    //             target: 'http://localhost:8081',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/API': '/API'
    //             }
    //         }
    //     }
    // },
    devServer: {
        proxy: {
        '/api': {
            target: 'https://wxapi.weiqh.net/api/wx', //需要替换的网址，将其替换位 api
            ws: true, //如果要代理 websockets，配置这个参数
            changeOrigin: true,//是否跨域
            pathRewrite: {
                '^/api': '' //通过 pathRewrite 重写地址，将前缀/api 转为/
            }
            }
        }
    },
}
