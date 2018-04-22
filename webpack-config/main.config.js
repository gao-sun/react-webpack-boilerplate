const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dirs = require('./dir.config');

module.exports = (env, argv) => {
	let config = {
		mode: argv.mode === 'production' ? argv.mode : 'development',
		devServer: {
			contentBase: './dist',
			hot: true
		},
		output: {
			path: dirs.dist_dir.main,
			filename: 'js/[name].[hash].js'
		},
		module: require('./module.config')(env, argv),
		resolve: require('./resolve.config'),
		plugins: [
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
			new webpack.DefinePlugin({
				DEV: argv.mode === 'production' ? false : true
			}),
			new ExtractTextPlugin('css/[name].[md5:contenthash:hex:20].css'), // Replaced from [contenthash] since there's a bug when using this plugin under the latest webpack
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
			}),
			new webpack.NamedModulesPlugin()
		]
	};

	if(argv.mode === 'production') {
		config.plugins.unshift(new webpack.DllReferencePlugin({
			manifest: require('../manifest.json'),
			name: 'vendors',
			context: dirs.src_dir.main
		}));
	}

	if(argv.mode !== 'production') {
		config.plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	return config;
};
