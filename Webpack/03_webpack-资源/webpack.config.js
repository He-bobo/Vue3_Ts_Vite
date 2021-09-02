const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: "url-loader",//可以将较小的文件，转成base64的URL
      //     // loader: "file-loader",
      //     options: {
      //       // outputPath: "img",
      //       name: "img/[name]_[hash:6].[ext]",
      //       limit: 100 * 1024
      //     }
      //   }
      // },
      {//webpack5开始，可以直接使用资源模块类型（asset module type）
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          //为了防止重复名，需要增加hash值
          /**
           * [ext]:处理文件的扩展名
           * [name]:处理文件的名称
           * [hash]:文件的内容，使用MD4的散列函数处理，生成的一个128位的hash值（32个16进制）
           * [contentHash]:在file-loader中和[hash]结果是一致的（在webpack的一些其他地方不一样）
           * [hash:<length>:截取hash的长度，默认32位太长了]；
           * [path]:文件相对webpack配置文件的路径；
           * 
           * ***/
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       // outputPath: "font",
      //       name: "font/[name]_[hash:6].[ext]"
      //     }
      //   }
      // },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      }
    ]
  }
}
