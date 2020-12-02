const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];
//hot module replacement
module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        filename: 'app.bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.resolve(__dirname, 'app'),
        port: 4040,
        hot: true, // 'hot module' feature allows injecting css and js refresh
        //hot module replacement: run time pe jo chiz change hua vo us time change karna
        host: '0.0.0.0'
        //open: true //..to open the website automatically
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader?url=false',// to handle the images manually url have to be given in false
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: postCSSPlugins
                            }
                        }
                    }
                ],
            },
        ],
    }
}