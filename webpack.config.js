const path = require('path')

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    entry: {
      background: './src/background/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist/js'),
    },
    devtool: IS_DEVELOPMENT ? 'cheap-module-source-map' : 'none',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
      ],
    },
  }
}
