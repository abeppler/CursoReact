const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
}).listen(3069, (err) => {
    if(err){
        return console.log(err)
    }
    
    return console.log('ta la na porta 3069')
})