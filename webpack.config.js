var webpack = require("webpack");
var path = require("path");
var dotenv = require('dotenv');

dotenv.load();

module.exports = {
	cache: true,
	entry: {
		main: [
			'webpack/hot/dev-server',
			'./index.jsx',
		]
	},
	output: {
		path:'./',
		filename: "[name].js",
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['6to5-loader'],
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loaders: ['jsx-loader'],
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	plugins: [
		new webpack.DefinePlugin({
			NYT_API_KEY: JSON.stringify(process.env.NYT_API_KEY)
		})
	]
};