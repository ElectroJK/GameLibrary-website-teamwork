const { merge } = require('webpack-merge'); // Import merge function from webpack-merge to combine configurations
const common = require('./webpack.common.js'); // Import common Webpack configuration
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import HtmlWebpackPlugin for generating HTML files
const CopyPlugin = require('copy-webpack-plugin'); // Import CopyPlugin to copy files and assets

module.exports = merge(common, {
  mode: 'production', // Set the mode to production for optimizations
  plugins: [
    // Configure plugins used in this production build
    new HtmlWebpackPlugin({
      template: './index.html', // Specify the HTML template for the entry point
    }),
    new CopyPlugin({
      patterns: [
        // Define patterns for files and directories to be copied to the output directory
        { from: 'img', to: 'img' }, // Copy all images from the 'img' folder
        { from: 'css', to: 'css' }, // Copy all CSS files from the 'css' folder
        { from: 'js/vendor', to: 'js/vendor' }, // Copy vendor JavaScript files
        { from: 'icon.svg', to: 'icon.svg' }, // Copy the SVG icon file
        { from: 'favicon.ico', to: 'favicon.ico' }, // Copy the favicon file
        { from: 'robots.txt', to: 'robots.txt' }, // Copy the robots.txt file for search engine directives
        { from: 'icon.png', to: 'icon.png' }, // Copy the PNG icon file
        { from: '404.html', to: '404.html' }, // Copy the custom 404 error page
        { from: 'site.webmanifest', to: 'site.webmanifest' }, // Copy the web app manifest file for Progressive Web Apps
      ],
    }),
  ],
});
