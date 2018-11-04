var path = require('path');
module.exports = {
    entry: {
        index: './public/js/main.js'
    },
    output: {
        path: path.join(__dirname, './public/js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx|\.js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react', 'stage-0']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'eval-source-map'
}