/* use the path module to read files */
const path = require('path');
/* Additional Plouins */

const HtmlWebpackPlugIn = require('html-webpack-plugin');
module.exports = {
    /* ENtry file to app from which files will be scanned */
    entry:'./modules/importingmodule.ts',
    /* Module-Loaders to be used */
    module:{
        rules:[
            {
                test: /\.ts?$/, /* Only ts files */
                use: 'ts-loader', /* Transpile with ts */
                exclude: /node_modules/ /* exclude node_modules folder */
            }
        ]
    },
    /* extensions to be reolved for files */
    resolve:{
        extensions:['.ts', '.js']
    },
    /* where the output will be generated */
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /* Additional plugins required to run the aplication */
    plugins:[
        new HtmlWebpackPlugIn({
            title:'My WebPack Project',
            template: './dist/mdl.html'
        })
    ],
    /* The development server */
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          compress: true,
          port: 9004,
    }
};