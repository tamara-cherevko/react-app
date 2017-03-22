import webpack from 'webpack';
import path from 'path';
import _ from 'lodash';

const APP_PATH = __dirname,
    DIST_PATH = path.join(APP_PATH, 'build'),
    FRONTEND_PATH = path.join(APP_PATH, 'src');

const baseConfig = {
    cache: true,
    entry: {
        index: path.join(FRONTEND_PATH, 'app.jsx')
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    resolve: {
        modules: [
            FRONTEND_PATH,
            'node_modules'
        ],
        extensions: ['.jsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader!babel-loader!eslint-loader'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            },
            {
                test: /fonts\/.*\.(eot|ttf|woff|svg|svgz)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

export default baseConfig;
