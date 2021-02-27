const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/scripts/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    //By Default mode is production.
    mode:'development',//bundle.js er vitor kivabe kaj hosse esb readable korar jonno: link(https://webpack.js.org/configuration/mode/)
    //module is the base property of loader.and rules will hold loader as object in a array
    devServer:{
        ////https://webpack.js.org/configuration/dev-server/#devserver
        contentBase: path.join(__dirname, 'dist'),
        port: 2222,
        open:true,
        compress: true
    },
    module:{
        ////rules writes style: https://webpack.js.org/concepts/loaders/#example
        rules:[
            {
                ////test written style: https://webpack.js.org/concepts/loaders/#example
                test: /\.js$/,
                ////use write style: https://webpack.js.org/loaders/babel-loader/#usage
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        ////plugins adding style: https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
                        //plugins: ["@babel/plugin-proposal-class-properties"]
                        ////OR
                        plugins: [
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            },
            {
                //css loader:   /\.css$/
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',////https://webpack.js.org/loaders/sass-loader/
                ], ////https://webpack.js.org/plugins/mini-css-extract-plugin/#string-2
            },
            {
                //html loader:   
                test: /\.html$/,
                use: 'html-loader'  ////https://webpack.js.org/loaders/html-loader/
            }
        ]
    },
    //kono plugin use er por ekane bole dite hobe
    ////https://webpack.js.org/plugins/mini-css-extract-plugin/#function-1
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html' ////https://github.com/jantimon/html-webpack-plugin
        })
    ]
}

//Index.js Entry