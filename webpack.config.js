// Webpack uses this to work with directories
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin its work
  // entry: { src: './client/index.js' },
  entry: './client/index.js', // j change
  output: {
    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    path: path.join(__dirname, 'build'), // j change from resolve to join
    filename: 'bundle.js',
  },
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript
  // minifying and other things, so let's set mode to development
  // in order to keep from changing this manually, need to have 2 scripts in package.json
  // production vs development is the difference between npm start and npm run dev
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/, //testing anything that ends in .js or .jsx
        exclude: /node_modules/, //are excluding the folder that hold the node modules dependencies. Put () around node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, './client/index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
      publicPath: './dist',
    },
    compress: true,
    port: 8080,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '*': 'http://localhost:3000',
    },
  },
};
