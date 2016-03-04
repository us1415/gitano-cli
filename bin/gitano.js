#!/usr/bin/env node
'use-strict';

var shell = require('shelljs');
var inquirer = require('inquirer');

////* GITANO *////

shell.echo('Hola! Soy el Gitano.\nI\'ll help you setup your React project.');
setTimeout(function () {
  shell.echo('\033[34mPreparing some magic powders... \033[0m');
}, 1000)
setTimeout(function () {
  shell.echo('\033[34mSummoning the ancient binary spirits! \033[0m');
}, 1000)


setTimeout(function () {
  var questions = [
    {
      type: 'input',
      name: 'Name',
      message: 'What\'s your project name?\n',
      default: 'react-sketch',
      filter: function( val ) { return val.toLowerCase(); }
    },
    {
      type: 'list',
      name: 'Strucure',
      message: 'What kind of structure you like?\n',
      choices: [ 'src - dist', 'app - build', 'app - dist', 'src - build', 'module - lib', 'lib - dist' ],
    },
    {
      type: 'list',
      name: 'Type',
      message: 'What type project do you need?\n',
      choices: [ 'React-Starter', 'React-Starter + Redux', 'React-Starter + Redux + Relay' ],
      filter: function( val ) { return val.toLowerCase(); }
    },
    {
      type: 'list',
      name: 'Css',
      message: 'Do you want a CSS Framework with that?\n',
      choices: [ 'Bootstrap', 'Foundation', 'Bulma', 'None' ]
    },
    {
      type: 'list',
      name: 'Testing',
      message: 'Do you write tests?',
      choices: [ 'Mocha + Chai', 'AVA', 'No, I live on the edge!' ]
    }
  ];

  inquirer.prompt( questions, function( answers ) {
    console.log('\nYour Project setup:');
    console.log( JSON.stringify(answers, null, '  ') );
  });
}, 3000)
