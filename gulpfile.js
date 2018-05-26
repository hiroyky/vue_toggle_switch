'use script'

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const watch = require('gulp-watch');
const runSequence = require('run-sequence');
const webpackConfig = require('./webpack.config');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const sass = require('gulp-sass');

const config = {
    js: {
        dst: './client/js',
        src: {
            main: './src/main.ts'
        }
    },
    style: {
        dst: './client/css',
        src: './src/style.scss',
    }
};


gulp.task('build', () => {
    runSequence('style','js');
})

gulp.task('style', () => {
    gulp.src(config.style.src)
        .pipe(sass({ouputStyle: 'expanded'}))
        .pipe(gulp.dest(config.style.dst));
})

gulp.task('js', () => {
    executeWebpack(config.js.src, config.js.dst);
})

function executeWebpack(targets, dst) {
    const config = Object.assign({}, webpackConfig);
    Object.keys(targets).forEach((key) => {
        config.entry[key] = targets[key];
    });
    gulp.src('*')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.mssage %>")}))
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(dst));
};
