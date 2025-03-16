export const copyImages = () => {
  return app.gulp
    .src(app.path.src.images, { encoding: false })
    .pipe(
      app.plugins.rename({
        dirname: "",
      }),
    )
    .pipe(app.gulp.dest(app.path.build.images));
};

export const copySVG = () => {
  return app.gulp
    .src(app.path.src.svg, { encoding: false })
    .pipe(
      app.plugins.rename({
        dirname: "",
      }),
    )
    .pipe(app.gulp.dest(app.path.build.svg))
    .pipe(app.plugins.browserSync.stream());
};

export const copyFavicons = () => {
  return app.gulp
    .src(app.path.src.favicons, { encoding: false })
    .pipe(app.gulp.dest(app.path.build.favicons));
};

export const copyFonts = () => {
  return app.gulp
    .src(app.path.src.fonts, { encoding: false })
    .pipe(app.gulp.dest(app.path.build.fonts));
};

// export const copyVideos = () => {
//     return app.gulp.src(app.path.src.videos, { encoding: false })
//     .pipe(app.plugins.rename ( {
//         dirname: ''
//     }))
//         .pipe(app.gulp.dest(app.path.build.videos))
// }
