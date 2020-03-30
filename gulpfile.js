const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass );
    watch("./sass/**/*.scss", serveSass );
    watch("./js/*.js").on('change', browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))        
        .pipe(browserSync.stream());
};

    function buildcss(done) {
        src('css/**/**.css')
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(dest('dist/css/'));
        done();

    }

    function buildjs(done) {
        src(['js/**.js', '!js/**.min.js'])
            .pipe(minify({
                ext:{
                    min:'.js'
            }
            }))
            .pipe(dest('dist/js/'));
        src('js/**.min.js')
            .pipe(dest('dist/js/'));
        done();

    }


    function buildhtml(done) {
        src('./**.html')
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(dest('dist/html/'));
        done();

    }
    
    function php(done) {
        src('./**.php')
            .pipe(dest('dist/php/'));
        src('phpMailer/**/**')
            .pipe(dest('dist/phpMailer/'));
        done();

    }

    function fonts(done) {
        src('fonts/**/**')
            .pipe(dest('dist/fonts/'));
        done();

    }

    function imagemin(done) {
        src('img/**/**')
            .pipe(tinypng({key:'mk3tzyxqcnxbd7y6CxStkcKt4BJ9ky1x'}))
            .pipe(dest('dist/img/'));
        src('img/**/*.svg')
            .pipe(dest('dist/img/'));
    }


exports.serve = bs;
exports.build = series(buildcss, buildjs, buildhtml, php, fonts, imagemin);