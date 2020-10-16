const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    mode: 'production',
    entry: resolve('./src/app.tsx'),
    output: {
        path: resolve('./dist'),
        filename: '[name].[fullhash:6].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@src': resolve('src'),
            '@conf': resolve('conf'),
            '@models': resolve('models'),
            '@components': resolve('src/components'),
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
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src', 'index.html'),
            filename: 'index.html'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
}
