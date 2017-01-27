var jimp = require("gulp-jimp-resize");
const imagemin = require('gulp-imagemin');
var gulp = require('gulp');
 
gulp.task('images', function() {
    return gulp.src(
        '_uploads/*.{png,jpg,bmp}'
        )
    .pipe(jimp({
        sizes: [
            {"width": 960},
        ]
    }))
    .pipe(gulp.dest('_uploads/'));
});

gulp.task('default', function() {
  gulp.src('_uploads/*')
      .pipe(imagemin())
      .pipe(gulp.dest('_uploads/'))
});
