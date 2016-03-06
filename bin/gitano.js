#!/usr/bin/env node
'use-strict';

var shell = require('shelljs');
var inquirer = require('inquirer');
var questions = require('./questions.js');

////* GITANO *////

shell.echo('\nHola, me dicen El Gitano!\nI\'ll help you setup your React project.\n');
// Build a function that checks
// and downloads updates with this messages as loading state
setTimeout( function () {
  shell.echo('\033[34mPreparing some magic powders... \033[0m');
}, 1200)
setTimeout( function () {
  shell.echo('\033[34mSummoning the ancient binary spirits! \033[0m\n');
}, 1800)


setTimeout( function () {
  inquirer.prompt( questions, function( answers ) {

    setTimeout( function () {
      shell.echo('\n\033[34mThe spirits are with you! \033[0m');
    }, 700)

    setTimeout( function () {
      // Create Project
      var project = answers.Name;

      shell.echo('Summoning ' + project + ':');
      // Add project type
      if (answers.Type === 'react-starter' && answers.Css === 'bootstrap') {
        shell.exec('git clone git@github.com:juanmnl/react-starter.git ' + project);
        shell.exec('cd ' + project + ' && rm -rf .git TODO preview.png README.md');
        shell.echo('\n\033[34mAdding some fresh Git\033[0m');
        shell.exec('cd ' + project + ' && git init && touch README.md');
        shell.echo('\033[32mStructure created \033[0m');
      } else {
        console.log('You chose something else :D and it\'s not available yet');
        console.log('\n\033[34mI\'m not able to help you yet. Sorry :(\033[0m');
        return;
      }

      console.log('\n\033[34mYour Project setup:\033[0m');
      console.log( JSON.stringify(answers, null, '  ') );
    }, 2000)

    setTimeout( function () {
      shell.echo('\n\033[32mReady! cd into your project and build awesome stuff \033[0m');
      shell.echo('\033[34mSee you soon! \033[0m');
    }, 2700)

  });
}, 3500)
