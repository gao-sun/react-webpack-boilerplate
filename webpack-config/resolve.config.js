const dirs = require('./dir.config');

module.exports = {
	alias: {
		app: dirs.src_dir.app,
		components: dirs.src_dir.components,
		scss: dirs.src_dir.scss
	}
};