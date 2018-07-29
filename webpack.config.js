const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    entry: {
      background: './src/background/index.js',
      content: './src/content/index.js',
      options: './src/options/index.js',
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
        {
          test: /\.vue$/,
          use: { loader: 'vue-loader' },
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
          ],
        },
      ],
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['.js', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  }
}
