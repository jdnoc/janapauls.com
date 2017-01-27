var jimp = require("gulp-jimp-resize");
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
  // place code for your default task here
});
