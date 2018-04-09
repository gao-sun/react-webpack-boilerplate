const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dirs = require('./dir.config');

module.exports = (env, argv) => ({
	mode: argv.mode === 'production' ? argv.mode : 'development',
	devServer: {
		contentBase: './dist'
	},
	output: {
		path: dirs.dist_dir.main,
		filename: 'js/[name].[hash].js'
	},
	module: require('./module.config'),
	resolve: require('./resolve.config'),
	plugins: [
		new webpack.DllReferencePlugin({
			manifest: require('../manifest.json'),
			name: 'vendors',
			context: dirs.src_dir.main
		}),
		new CleanWebpackPlugin([
			'dist/js/main.*.js',
			'dist/css/main.*.css'
		], {
			root: dirs.root_dir,
			watch: true
		}),
		new CleanWebpackPlugin([
			'dist/assets', // Clean assets only when re-run
		], {
			root: dirs.root_dir,
		}),
		new ExtractTextPlugin('css/[name].[contenthash].css'),
		new HtmlWebpackPlugin({
			template: dirs.src_dir.main + '/index.html',
		}),
		/* Uncomment below only when your vendors have style files. */
		// new HtmlWebpackIncludeAssetsPlugin({
		// 	assets: assets: [ {
		// 		path: 'css',
		// 		glob: 'vendors.*.css'
		// 	} ],
		// 	append: false
		// }),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: [ {
				path: 'js',
				glob: 'vendors.*.js'
			} ],
			append: false
		})
	]
});
