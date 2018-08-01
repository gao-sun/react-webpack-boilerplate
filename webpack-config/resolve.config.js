const dirs = require('./dir.config');

module.exports = {
	alias: {
		foundations: dirs.src_dir.foundations,
		app: dirs.src_dir.app,
		components: dirs.src_dir.components,
		services: dirs.src_dir.services,
		scss: dirs.src_dir.scss,
	}
};
