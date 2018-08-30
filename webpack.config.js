const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    entry: {
      background: './src/background/index.ts',
      content: './src/content/index.ts',
      options: './src/options/index.ts',
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist/js'),
    },
    devtool: IS_DEVELOPMENT ? 'cheap-module-source-map' : 'none',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader',
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
      extensions: ['.ts', '.js', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  }
}
