const path = require('path');
const root_dir = path.resolve('./');
const src_dir = root_dir + '/src';
const dist_dir = root_dir + '/dist';

module.exports = {
	root_dir: root_dir,
	src_dir: {
		main: src_dir,
		app: src_dir + '/app',
		components: src_dir + '/app/components',
		scss: src_dir + '/scss',
		assets: src_dir + '/assets'
	},
	dist_dir: {
		main: dist_dir,
		js: dist_dir + '/js',
		css: dist_dir + '/css',
		assets: dist_dir + '/assets'
	}
};