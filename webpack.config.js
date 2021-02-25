const path = require('path')
module.exports = {
    entry: './src/scripts/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    //By Default mode is production.
    mode:'development',//bundle.js er vitor kivabe kaj hosse esb readable korar jonno: link(https://webpack.js.org/configuration/mode/)
    //module is the base property of loader.and rules will hold loader as object in a array
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
            },
            {
                //png loader:   /\.png$/
            }
        ]
    }
}

//Index.js Entry