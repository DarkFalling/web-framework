const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: ["./src/client/index.tsx"],
    output: {
        filename: "[name].[hash].js",
        chunkFilename: '[name].chunk.[hash].js',
        path: path.resolve(__dirname, "../bin/app"),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: "./build/tsconfig.client.json",
                }
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["../bin/app"], { verbose: true, allowExternal: true }),
        new HtmlWebpackPlugin({
            title: 'Web Framework',
            filename: "index.html",
            template: "./src/client/index.html"
        })
    ],
    optimization: {
        /*
        splitChunks: {
            chunks: 'all'
        },*/
        //https://webpack.js.org/guides/caching/#extracting-boilerplate
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        //https://webpack.js.org/guides/caching/#extracting-boilerplate
        runtimeChunk: 'single',
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/
};