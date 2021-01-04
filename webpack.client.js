const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const config  = {
    //Tell webpack the root file of the server application

    entry: "./src/client/client.js",
    
    //output tells webpack where to put the output file

    output: {
        filename: "bundle.js",
        path: require("path").resolve(__dirname, "public"),
    },
    
}

module.exports = merge(baseConfig, config);