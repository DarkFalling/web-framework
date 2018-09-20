const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const common = require("./webpack.common.config");
const merge = require("webpack-merge");
module.exports = merge(common, {
    entry: ["webpack-hot-middleware/client"],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    //'postcss-loader',
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            _DEV_: true
        }),
    ],
    mode: "development"
});
/*
module.exports = {
    entry: ["webpack-hot-middleware/client", "./src/index.tsx"],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
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
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: "index.html",
            template: "src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            _DEV_: true
        }),
    ],
    
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    //externals: {
    //    "react": "React",
    //    "react-dom": "ReactDOM"
    //},
    mode: "development"
};
*/