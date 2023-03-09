const { createProxyMiddleware } = require("http-proxy-middleware");

const options = {
  target: "https://api.cloudinary.com/v1_1",
  changeOrigin: true,
  pathRewrite: {
    "^/cloudinary": "/dal04xwlw",
  },
};

const proxy = createProxyMiddleware(options);

module.exports = proxy;
