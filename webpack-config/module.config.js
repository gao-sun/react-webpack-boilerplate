const dirs = require('./dir.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => ({
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [ 
				{
					loader: 'babel-loader',
					query: {
						presets: [ 'react', ['env', {
							targets: {
								browsers: 'last 2 Chrome versions'
							}
						}] ],
						plugins: [
							'transform-decorators-legacy',
							'transform-class-properties',
							'transform-object-rest-spread',
							'react-hot-loader/babel'
						]
					}
				}
			]
		},
		{
			test: /\.scss$/,
			loader: argv.mode === 'production' ?
				ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: [
							{ loader: 'css-loader', options: { minimize: true } },
							'sass-loader'
						],
						publicPath: dirs.src_dir.assets
					}
				)
			:
				['style-loader', 'css-loader', 'sass-loader']
		},
		{
			test: /\.css$/,
			loader: argv.mode === 'production' ?
				ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: [
							{ loader: 'css-loader', options: { minimize: true } }
						],
						publicPath: dirs.src_dir.assets
					}
				)
			:
				['style-loader', 'css-loader']
		},
		{
			test: /\.(jpe?g|gif|png|svg)$/,
			use: [ 
				{
					loader: 'file-loader',
					options: {
						name: 'images/[hash].[ext]',
						outputPath: 'assets',
						publicPath: '../assets'
					}
				} 
			]
		}
	]
});