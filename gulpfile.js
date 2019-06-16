"use strict";

var gulp = require("gulp");
var browserSync = require("browser-sync");
var htmlValidator = require("gulp-w3c-html-validator");

gulp.task("html-validation", function() {
  gulp
    .src("src/**/*.html")
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter());
});

gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });

  gulp.watch("src/**/*.html", gulp.series("html-validation"));
  gulp.watch("src/**/*.{html,css,js}").on("change", browserSync.reload);
});
