const gulp = require("gulp");
const sass = require("gulp-sass");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const replace = require("gulp-replace");


// watch
gulp.task("default", function () {
  gulp.watch("./sass/style.scss", gulp.series("sass"));
  gulp.watch("./ejs/index.ejs", gulp.series("ejs"));
});

// sass
gulp.task("sass", function () {
  return gulp.src(["./sass/style.scss"])
    .pipe(sass())
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest("./css/"));
});

// ejs
gulp.task("ejs", function () {
  return gulp.src(["./ejs/index.ejs", '!' + "./ejs/_*.ejs"])
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest("./"));
});