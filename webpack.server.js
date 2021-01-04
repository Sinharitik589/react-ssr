const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

//not sent to the browser hence no leak of info
const config =
{
    // inform webpack that we are building a bundle for nodejs
    //rather then browser
    target: "node",
    
    //Tell webpack the root file of the server application

    entry: "./src/index.js",
    
    //output tells webpack where to put the output file

    output:
    {
        filename: "bundle.js",
        path: require("path").resolve(__dirname, "build"),
    },
    
   externals:[webpackNodeExternals()]
}
module.exports = merge(baseConfig, config);