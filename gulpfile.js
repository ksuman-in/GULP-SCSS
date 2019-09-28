const gulp = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

const sassCompile = scssCompile => {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/styles"));
};

//Minify .js
const uglifyjs = () => {
  return gulp
    .src("src/scripts/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/scripts"));
};
// compress images
const compressImage = () => {
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
};

const watch = done => {
  gulp.watch("src/scss/**/*.scss", sassCompile);
  gulp.watch("src/scripts/**/*.js", uglifyjs);
  done();
};

// var server = gulp.series(watch);

exports.sassCompile = sassCompile;
exports.uglifyjs = uglifyjs;
exports.watch = watch;
// exports.server = server;

gulp.task(
  "default",
  gulp.series(gulp.parallel(sassCompile, compressImage, uglifyjs)),
  function(done) {
    done();
  }
);
