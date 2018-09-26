import Server from "./server";
import open = require("open");

import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');
import webpackHotMiddleware = require("webpack-hot-middleware");

const config = require('../../build/webpack.dev.config');
const compiler = webpack(config);

export class DevServer extends Server {
    constructor() {        
        super();

        let devMiddleware = webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath
        });
        //Executes a callback function when the compiler bundle is valid, typically after compilation.
        devMiddleware.waitUntilValid((stats) => {
            open("http://localhost:3000", "chrome");
        });

        // Tell express to use the webpack-dev-middleware and use the webpack.config.js
        // configuration file as a base.
        this.addMiddleware(devMiddleware);
        this.addMiddleware(webpackHotMiddleware(compiler));
    }
}

new DevServer().start();