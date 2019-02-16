const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const fs = require('fs');

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
        })
    })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views')

module.exports = {
    entry: [
        './src/js/index.js',
        //  'font-awesome/scss/font-awesome.scss',
        './src/scss/main.scss'
    ],
    output: {
        path: path.resolve(__dirname, './docs/'),
        // publicPath: 'docs/',
        filename: './js/bundle.js'
    },
    devServer :{
        overlay : true
    },
    devtool: "source-map",
    optimization: {
        minimizer: [
            //Если нужен не сжатый CSS закомментировать эту строку
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    output: {
                        comments: false,
                    }
                }
            }),
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/js'),
            exclude: [/node_modules/],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env','stage-3']
                }
            }
        },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/scss'),

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers:['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]

            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/html/includes/'),
                use: ['raw-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use : [
                    { loader: "file-loader?name=i/[hash].[ext]"},
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }

        ]
    },
    resolve: {
        modules: ["node_modules", "spritesmith-generated"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css',
            allChunks: true,
        }),
        new CleanWebpackPlugin(['docs','public']),
        new CopyWebpackPlugin([
            {
                from: './node_modules/font-awesome/fonts',
                to: './fonts'
            },
            {
                from: './src/fonts',
                to: './fonts'
            },

            {
                from: './src/img',
                to: './img'
            }
        ]),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/img/ico'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'src/img/sprite.png'),
                css: path.resolve(__dirname, 'src/scss/sprite.scss')
            },
            apiOptions: {
                cssImageRef: "../img/sprite.png"

            },
            spritesmithOptions : {
                padding: 5
            }

        })

    ].concat(htmlPlugins)

};
