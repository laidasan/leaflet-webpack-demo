
const path = require('path')

// for vue
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// for here routing api
// const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js'
    },
    output: {
        publicPath: './dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                // exclude: /(node_modules|bower_components)/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]',
                        }
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }

        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'images')
        }
    },

    // optimization: {
    //     minimizer: [new TerserPlugin({
    //         chunkFilter: (chunk) => {
    //             // Exclude mapsjs chunk from the minification as it is already minified
    //             if (/mapsjs/.test(chunk.name)) return false
    //             return true
    //         }
    //     })],
    // }

}