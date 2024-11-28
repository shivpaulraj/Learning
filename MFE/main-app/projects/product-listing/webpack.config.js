const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    uniqueName: 'productListing',
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'productListing',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductListingModule': './src/app/product-listing/product-listing.module.ts',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};