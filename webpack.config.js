const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: {
		"polkadot": "./src/polkadot.js",
		"polkadot-extension-dapp": "./src/polkadot-extension-dapp.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname),
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
};
