const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: { index: path.resolve(__dirname, "src", "index.jsx") },
	output: {
		filename: "./app.js",
		path: path.resolve(__dirname, "/public"),
	},
	mode: "development",
	devtool: "source-map",
	externals: {
		jquery: "jQuery",
	},
	resolve: {
		extensions: ["", ".js", ".jsx"],
		alias: {
			modules: path.resolve(__dirname, "/node_modules"),
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html")
		}),
	],
	devServer: {
		contentBase: "./public",
		compress: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.(s?css)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
				use: { loader: "file-loader" },
			},
		],
	},
};
