const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool:'sourcemap',
    entry:[
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3069',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                include: /src/,
                loader: 'babel'
            }
        ]
    }
}