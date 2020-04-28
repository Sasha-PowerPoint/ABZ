const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry  : './index.js',
    output : {
        path       : path.join(__dirname, '/public/static'),
        filename   : 'bundle.js',
        publicPath : '/static/'
    },
    module : {
        rules : [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                use     : {
                    loader : 'babel-loader'
                }
            },
            {
                test : /\.(ttf)$/,
                use  : {
                    loader : 'url-loader'
                }
            },
            {
                test : /\.less$/,
                use  : [ {
                    loader : 'style-loader'
                }, {
                    loader : 'css-loader'
                }, {
                    loader : 'less-loader'
                } ]
            },
            {
                test : /\.(png|jpeg|jpg|gif|webp|svg)$/i,
                use  : [
                    {
                        loader : 'file-loader'
                    }
                ]
            }
        ]
    },
    devServer : {
        contentBase        : path.join(__dirname, 'public'),
        publicPath         : '/static/',
        compress           : true,
        hot                : true,
        host               : '0.0.0.0',
        port               : 3000,
        historyApiFallback : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ]
};
