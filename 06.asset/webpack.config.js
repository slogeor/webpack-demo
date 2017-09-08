const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        /**
         * 加载 CSS
         */
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      /**
       * 加载图片
       */
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      /**
       * 加载字体
       */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      /**
       * 加载其它资源
       */
      {
        test: /\.(cvs|tsv)$/,
        use: [
          'cvs-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
