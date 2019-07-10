var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const resolve = file => path.resolve(__dirname, file);
const favicon = require('serve-favicon');

const isProd = (process.env.NODE_ENV === 'production');
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 0 : 0
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
if(process.env.NODE_ENV !== "production"){
  app.use(webpackDevMiddleware(compiler, {
	  publicPath: config.output.publicPath
	}));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', serve('./public', true));
app.use('/dist', serve('./dist', true));
app.use('/img', serve('./blockly/img', true));
app.use('/blockly', serve('./blockly', true));
app.use('/closure-library', serve('./closure-library', true));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
