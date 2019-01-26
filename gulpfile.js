'use strict';

global.$ = {
	path: {
		task: require('./gulp/path/tasks-path.js')
	},
	gulp: require('gulp'),
	browserSync: require('browser-sync').create(),
	del: require('del')
};

$.path.task.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug:dev',
		'fonts',
		'styles:dev',
		'img:dev',
		'libsJS:dev',
		'js:dev',
		'svg'
	)
));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug:dev',
		'fonts',
		'styles:build',
		'img:build',
		'libsJS:build',
		'js:build',
		'svg'
	)
));

$.gulp.task('build-min', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug:build-min',
		'fonts',
		'styles:build-min',
		'img:build',
		'libsJS:build',
		'js:build-min',
		'svg'
	)
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'serve'
	)
));