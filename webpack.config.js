const path = require('path');

const isDebug = !process.argv.includes('--release');

module.exports = {
    mode: isDebug ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: isDebug ? 'cheap-module-inline-source-map' : 'source-map',
    devServer: {
        open: true,
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        configFile: false,
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            }
        ]
    }
};