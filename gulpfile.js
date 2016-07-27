var gulp = require('gulp');
var del = require('del');
var merge = require('merge-stream');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var replace = require('gulp-rev-replace');
var less = require('gulp-less');

var path = require('path');
var webpack = require('webpack');
// var HtmlwebpackPlugin = require('html-webpack-plugin') ;
var colors = require('colors') ;

(function() {
    //colors
    var colorsMaps = {
        silly: 'rainbow',
        input: 'grey',
        verbose: 'cyan',
        prompt: 'red',
        info: 'green',
        data: 'blue',
        help: 'cyan',
        warn: 'yellow',
        debug: 'magenta',
        error: 'red'
    }
    colors.setTheme(Object.assign({}, colorsMaps));
    gulp.task('showColor', function () {
        for (var _o in colorsMaps) {
            if (colorsMaps.hasOwnProperty(_o)) {
                console.log(( ' this color is ' + _o + '!' )[_o]);
            }
        }
    });
})() ;

(function(){
    //project
    gulp.task('clean', function () {
        return del(['dist']);
    });
    gulp.task('compile', ['clean','webpackProduction'], function () {
        // var js = gulp.src('src/static/scripts/*.js', {base: 'src/static'}).pipe(uglify());
        var jsStream = gulp.src([
                'src/static/**/*.js' 
            ],{
                base : 'src/static'
            }) ;
        var cssStream = gulp.src('src/static/resource/styles/**/*.less', {base: 'src/static'})
            .pipe(less());
        var imgStream = gulp.src('src/static/resource/images/**', {base: 'src/static'});
        var fontStream = gulp.src('src/static/resource/fonts/**', {base: 'src/static'});
        return merge(jsStream, cssStream, imgStream, fontStream)
            .pipe(rev())
            .pipe(gulp.dest('dist/static'))
            .pipe(rev.manifest())
            .pipe(gulp.dest('dist/tmp'));
    });
    gulp.task('revision', ['compile'], function () {
        return gulp.src('dist/static/**')
            .pipe(rev())
            .pipe(gulp.dest('dist/static'))
            .pipe(rev.manifest())
            .pipe(gulp.dest('dist/tmp'));
    });
    gulp.task('replace', ['compile'], function () {
        return gulp.src('src/views/**/*.hbs')
            .pipe(replace({manifest: gulp.src('dist/tmp/rev-manifest.json')}))
            .pipe(gulp.dest('dist/views'));
    });
    gulp.task('copy', ['clean', 'compile', 'replace'], function () {
        return gulp.src([
            'src/**',
            '!src/static/**',
            '!src/views/**'
        ])
            .pipe(gulp.dest('dist'));
    });
    gulp.task('build', ['clean', 'compile', 'replace', 'copy'], function () {
        return del(['dist/tmp']);
    });
    gulp.task('default', ['clean', 'build']);
})() ;

(function () {
    //webpack
    var webpackConfig = {
        entry: {
            app : './src/static/index/index.js' ,
            vendor : [
                'jquery',
                'react',
                'react-dom',
                'react-redux',
                'react-router',
                'react-router-redux',
                'redux'
            ]
        },
        output: {
            path : './src/static/index' ,
            filename: 'bundle.js'
        },
        //启动sourcemap
        devtool: 'eval-source-map',
        // devServer: {
        //     historyApiFallback: true,
        //     // hot: true,
        //     inline: true,
        //     progress: true
        // },
        module: {
            perLoaders: [
                {
                    test: /\.jsx?$/,
                    include: 'src' ,
                    loader: 'jshint-loader'
                }
            ],
            loaders: [{
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015' , 'react' , "stage-1"] //等同于.babelrc配置
                }
            }]
        },
        // 配置jshint的选项，支持es6的校验
        jshint: {
            "esnext": true
        },
        resolve: {
            extensions: ['', 'jsx' , '.js']
        },
        plugins: [
            // new HtmlwebpackPlugin({
            //    title : 'html plugin'
            // }),
            new webpack.ProvidePlugin({
                $ : 'jquery' ,
                jQuery : 'jquery' ,
                'window.jQuery' : 'jquery'
            }),
            new webpack.optimize.CommonsChunkPlugin( 'vendor' , 'vendor.bundle.js' )
        ]
    } ;
    gulp.task( 'webpack' , function(){
        webpack( webpackConfig , function( err, state ){
            console.info( state.toString().info ) ;
        }) ;
        gulp.watch( [
            './src/static/**/*.js' ,
            '!./src/static/**/bundle.js' ,
            '!./src/static/**/vendor.bundle.js'
        ], function (event) {
            console.log( ('this file : ' + event.path.data + ' has '　+ event.type.debug ).warn ) ;
            webpack( webpackConfig , function( err, state ){
                console.info( state.toString().info ) ;
            }) ;
        } ) ;
    }) ;
    //no watch
    gulp.task( 'webpackProduction' , function(){
        webpack( webpackProduction , function( err, state ){
            //
        }) ;
    }) ;
})() ;