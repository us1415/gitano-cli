#!/usr/bin/env node
'use-strict';

var shell = require('shelljs');
var inquirer = require('inquirer');

////* GITANO *////

shell.echo('\nHola, me llaman el Gitano!\nI\'ll help you setup your React project.\n');
setTimeout(function () {
  shell.echo('\033[34mPreparing some magic powders... \033[0m');
}, 1200)
setTimeout(function () {
  shell.echo('\033[34mSummoning the ancient binary spirits! \033[0m\n');
}, 1800)


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
      name: 'Structure',
      message: 'What kind of structure do you like?\n',
      choices: [
        'src - dist',
        'app - dist',
        'src - build',
        'app - build',
        'module - lib',
        'lib - dist',
        'lib - build'
      ]
    },
    {
      type: 'list',
      name: 'Type',
      message: 'What type of project do you need?\n',
      choices: [
        'React-Starter',
        'React-Starter + Redux',
        'React-Starter + Redux + Relay'
      ]
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
      message: 'Do you write tests?\n',
      choices: [ 'Mocha + Chai', 'AVA', 'No thanks, I\'m living on the edge!' ]
    }
  ];

  inquirer.prompt( questions, function( answers ) {
    setTimeout(function () {
      shell.echo('\n\033[34mThe spirits are with you! \033[0m');
    }, 700)
    setTimeout(function () {
      // Create Project
      var project = answers.Name;
      shell.echo('Creating ' + project + '...');
      shell.exec('mkdir ' + project);
      shell.exec('cd ' + project + ' && npm init -y --loglevel=silent');
      shell.echo('\033[32mProject created with package.json \033[0m\n');
      // Create Structure
      if (answers.Structure === 'src - dist') {
          shell.echo('Creating Structure...\n');
          shell.exec('cd ' + project + ' && mkdir src src/components');
          shell.exec('cd ' + project + ' && mkdir dist');
          shell.exec('find ' + project + ' -type d -print');
          shell.echo('\033[32mStructure created \033[0m');
      }
      console.log('\nYour Project setup:');
      console.log( JSON.stringify(answers, null, '  ') );
    }, 2000)
    setTimeout(function () {
      shell.echo('\n\033[32mReady! \033[0m');
      shell.echo('\n\033[34mDon\'t forget to cd into your project and \'git init\' \033[0m');
      shell.echo('\033[34mSee you soon! \033[0m');
    }, 2700)
  });
}, 3500)
