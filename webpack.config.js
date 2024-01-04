const path = require('path');

module.exports = {
    entry: './src/APEXjsonforms.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'APEXjsonforms.js',
        library: 'APEXjsonforms',
        libraryTarget: 'window'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
}