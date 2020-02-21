const webpackHtmlPlugin=require("html-webpack-plugin");
const path=require('path')
module.exports={
    context: __dirname,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "dist/main.js",
        publicPath: "/"
    },
    devServer: {
        historyApiFallback:true
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use:'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpackHtmlPlugin({
            template: path.resolve(__dirname,'public/index.html')
        })
    ]
}