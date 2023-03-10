module.exports = {

  // 关闭eslint校验.
  devServer: {
    overlay: {
      warnings: false, //不显示警告
      errors: false //不显示错误
    },

    proxy: {
      '/api': {
        target:'http://127.0.0.1:8000/', // 你请求的第三方接口
        changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite:{  // 路径重写，
          '^/api': ''  // 替换target中的请求地址，也就是说/api=/target，请求target这个地址的时候直接写成/api即可。
        }
      }
    }

  },
  lintOnSave: false //关闭eslint检查
}
