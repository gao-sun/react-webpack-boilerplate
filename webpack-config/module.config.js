const dirs = require('./dir.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [ 
				{
					loader: 'babel-loader',
					query: {
						presets: [ 'react', 'env' ]
					}
				}
			]
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract(
				{
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader'
					],
					publicPath: dirs.src_dir.assets
				}
			)
		},
		{
			test: /\.(jpe?g|gif|png|svg)$/,
			use: [ 
				{
					loader: 'file-loader',
					options: {
						name: 'images/[hash].[ext]',
						outputPath: 'assets',
						publicPath: '/assets'
					}
				} 
			]
		}
	]
};