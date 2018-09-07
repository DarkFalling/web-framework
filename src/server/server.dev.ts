import Server from "./server";


const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const config = require('../../build/webpack.dev.config');
const compiler = webpack(config);

export class DevServer extends Server {
    constructor() {
        super();
        // Tell express to use the webpack-dev-middleware and use the webpack.config.js
        // configuration file as a base.
        this.addMiddleware(webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath
        }));
        this.addMiddleware(webpackHotMiddleware(compiler));
    }
}

new DevServer().start();