const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware(process.env.REACT_APP_BASE_URL, {
        target: process.env.REACT_APP_HOST_URL,
        //解决
        pathRewrite: {
            '^/api/': '/'
        },
        changeOrigin: true
    }));
};