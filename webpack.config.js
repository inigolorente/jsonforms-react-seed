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
                test: /\.(js|jsx|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                            '@babel/preset-env'
                        ]
                    }
                },
                exclude: '/node_modules/'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
}