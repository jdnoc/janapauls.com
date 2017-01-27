const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', function() {
    gulp.src('_uploads/*')
        .pipe(imagemin())
        .pipe(gulp.dest('_uploads'))
});

gulp.task('default', function() {
  // place code for your default task here
});
