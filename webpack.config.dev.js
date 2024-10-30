const { merge } = require('webpack-merge'); // Import merge function from webpack-merge to combine configurations
const common = require('./webpack.common.js'); // Import common Webpack configuration

module.exports = merge(common, {
  mode: 'development', // Set the mode to development for easier debugging and faster build times
  devtool: 'inline-source-map', // Generate inline source maps for better debugging in development
  devServer: {
    // Configure the development server settings
    liveReload: true, // Enable live reloading of the browser when changes are detected
    hot: true, // Enable Hot Module Replacement (HMR) for better performance while developing
    open: true, // Automatically open the browser when the server starts
    static: ['./'], // Serve static files from the current directory
  },
});
