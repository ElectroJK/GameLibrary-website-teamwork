const path = require('path'); // Import the 'path' module to handle file and directory paths

module.exports = {
  entry: {
    // Specify the entry point of the application
    app: './js/app.js', // The main JavaScript file that will be bundled
  },
  output: {
    // Define the output settings for the bundled files
    path: path.resolve(__dirname, 'dist'), // Resolve the output path to the 'dist' directory
    clean: true, // Enable cleaning the output directory before each build to avoid leftover files
    filename: './js/app.js', // Specify the name and location of the output bundle file
  },
};
