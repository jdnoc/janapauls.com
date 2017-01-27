const gulp = require('gulp');
var jimp = require("gulp-jimp-resize");
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
    gulp.src('_uploads/*')
        .pipe(imagemin())
        .pipe(gulp.dest('_uploads'))
});

gulp.task('image-resize', function() {
    return gulp.src(
        '_uploads/*.{png,jpg,bmp}'
        )
    .pipe(jimp({
        sizes: [
            {"width": 720}
        ]
    }))
    .pipe(gulp.dest('_uploads/'));
});

gulp.task('default', function() {
  // place code for your default task here
});
