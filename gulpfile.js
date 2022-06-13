var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');

gulp.task('browserify', function () {
    return gulp.
        src('./index.js').
        pipe(browserify()).
        pipe(gulp.dest('./bin'));
});

gulp.task('test', function () {
    var error = false;
    gulp.
        src('./test.js').
        pipe(mocha()).
        on('error', function () {
            console.log('Tests failed!');
            error = true;
        }).
        on('end', function () {
            if (!error) {
                console.log('Tests succeeded! Enter the below code:\n' +
                    require('fs').readFileSync('./output.dat'));
                process.exit(0);
            }
        });
});

gulp.task('watch', function () {
    gulp.watch(['./course.js', './student.js'], ['test']);
    gulp.watch(['./*.js'], ['browserify']);
});
