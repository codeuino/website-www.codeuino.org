const {createProxyMiddleware} = require('http-proxy-middleware')
// this proxy code allows the use of .netlify/function in both development and production
module.exports = function(app){
    app.use(
        createProxyMiddleware(
        "/.netlify/functions", {
          target: "http://localhost:9000",
          pathRewrite: {
            '^/\\.netlify/functions': ''
          }
        }
        )
    )
}
