const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dirs = require('./dir.config');

module.exports = {
	output: {
		path: dirs.dist_dir.js,
		filename: '[name].[hash].js',
		library: '[name]'
	},
	entry: {
		vendors: ['react', 'react-dom', 'react-router-dom']
	},
	module: require('./module.config'),
	plugins: [
		new webpack.DllPlugin({
			path: 'manifest.json',
			name: '[name]',
			context: dirs.src_dir.main
		}),
		new CleanWebpackPlugin([
			'dist/js/*',
			'dist/css/*'
		], {
			root: dirs.root_dir
		}),
		new ExtractTextPlugin('css/[name].[contenthash].css'),
	]
};
