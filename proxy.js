const { createProxyMiddleware } = require("http-proxy-middleware");

const options = {
  target: "https://res.cloudinary.com",
  changeOrigin: true,
  pathRewrite: {
    "^/cloudinary": "/dal04xwlw",
  },
};

const proxy = createProxyMiddleware(options);

module.exports = proxy;
