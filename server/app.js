var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
mongoose
.connect(`mongodb+srv://admin:adminadmin@cluster0.6k0dq.mongodb.net/bohata?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const gamePlatformRouter = require('./routes/gamePlatform');
const studioRouter = require('./routes/studio');
const tournamentRouter = require('./routes/tournament');
const reviewRouter = require('./routes/review');
const genreRouter = require('./routes/genre');
const carRouter = require('./routes/car');
const athleteRouter = require('./routes/athlete');
const historicalEventRouter = require('./routes/historicalEvent');
const enviromentRouter = require('./routes/enviroment');
const cors = require('cors');
var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/platform', gamePlatformRouter);
app.use('/studio', studioRouter);
app.use('/event', tournamentRouter);
app.use('/review', reviewRouter);
app.use('/genre', genreRouter);
app.use('/car', carRouter);
app.use('/athlete', athleteRouter);
app.use('/historical-event', historicalEventRouter);
app.use('/enviroment', enviromentRouter);
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
