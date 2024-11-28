/*const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    uniqueName: 'mainApp',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mainApp',
      remotes: {},
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};*/
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    uniqueName: 'mainApp',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mainApp',
      remotes: {
        productListing: 'productListing@http://localhost:3001/remoteEntry.js',
        shoppingCart: 'shoppingCart@http://localhost:3002/remoteEntry.js',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};