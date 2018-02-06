var gulp = require('gulp')
var webpackConfig = require('./webpack.config')

gulp.task('cleanDest', function(cb) {
  var rimraf = require('rimraf')
  rimraf('./public/', cb)
})

gulp.task('copyIndexHtml', ['cleanDest'], function() {
  return gulp.src('./src/web/index.html')
    .pipe(gulp.dest('./public/'))
})
