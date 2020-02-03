const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({title: "Webpack demo"})
	],
	devServer: {
		stats: "errors-only",
		// parse host and port from env to allow customization
		host: process.env.HOST,
		port: process.env.PORT,
		// always open a browser to the page
		open: true,
		// show an overlay with errors that happened launching WDS
		overlay: true,
	},
};