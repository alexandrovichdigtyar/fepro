const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './login.js',
    output: {
        filename: 'login.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
      ]
}