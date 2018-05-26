const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackConfig = {
    entry: {
        vendor: ['vue', 'vue-class-component'] 
    },
    output: {
        filename: '[name].bundle.js'
     },
     resolve: {
         modules: [
             path.join(__dirname, 'node_modules'),
         ],
         extensions: ['.ts', '.js', '.vue', '.json'],
         alias: {
             'vue': 'vue/dist/vue.esm.js',
             'Vue$': 'vue/dist/vue.esm.js'
         }
     },
     module: {
         rules: [
             {
                 test: /\.vue$/,
                 loader: 'vue-loader',
                 exclude: /node_modules\/.*/,
                 options: {
                     preserveWithspace: false
                 }
             },
             {
                 test: /\.tsx?$/,
                 loader: 'ts-loader',
                 exclude: /node_modules\/.*/,
                 options: {
                    appendTsSuffixTo: [/\.vue$/],
                 }
             },
         ]
     },
     devtool: 'source-map',
     optimization: {
         minimize: true,
         splitChunks: {
            name: 'vendor',
            chunks: 'initial'
         }
     },
     plugins: [
        new VueLoaderPlugin()
     ]
};

module.exports = webpackConfig;