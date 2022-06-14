import React from 'react';
import StartScreen from './components/startScreen'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

function App() {

  return (
    <MuiThemeProvider>
      <StartScreen />
    </MuiThemeProvider>
  );
}

export default App;

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
