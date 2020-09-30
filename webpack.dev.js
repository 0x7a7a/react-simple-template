const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    mode: 'development',
    entry: resolve('./src/app.tsx'),
    output: {
        path: resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: resolve('./dist'),
        compress: false,
        port: 9000,
        proxy: {}
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@src': resolve('src'),
            '@utils': resolve('src/utils')
        }
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]-[local]'
                            },
                            importLoaders: 2
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src', 'index.html'),
            filename: 'index.html'
        })
    ]
}