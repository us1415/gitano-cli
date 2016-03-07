#!/usr/bin/env node
'use-strict';

var shell = require('shelljs');
var inquirer = require('inquirer');
var questions = require('./questions.js');

////* GITANO *////

// Why so many setTimeout(s)? -> Because "Perception" matters

shell.echo('\nHello! Me llaman "El Gitano" –¡Olé!-\nI\'ll help you setup your React project.\n');
// Build a function that checks
// and downloads updates with this messages as loading state
setTimeout( function () {
  shell.echo('\033[34mMixing some magic powders... \033[0m');
}, 1600);
setTimeout( function () {
  shell.echo('\033[34mSummoning the ancient binary spirits...\033[0m\n');
}, 2400);


setTimeout( function () {
  inquirer.prompt( questions, function( answers ) {

    setTimeout( function () {
      shell.echo('\n\033[34mThe spirits are with you! \033[0m');
      // add random generated "cheerful" message
    }, 700);

    setTimeout( function () {
      // Create Project
      var project = answers.Name;

      shell.echo('Summoning ' + project + ':');
      // Add project type & css
      if (answers.Type === 'react-starter' && answers.Css === 'bootstrap') {
        reactBootstrap( project );
      } else if (answers.Type === 'react-starter' && answers.Css === 'none') {
        reactNoCss( project );
      }
    }, 2000);

    setTimeout( function () {
      shell.echo('\n\033[32mReady! cd into your project and build awesome stuff \033[0m');
      shell.echo('\033[34mSee you soon! \033[0m');
    }, 2700);

  });
}, 3500);


function reactBootstrap ( project ) {
  shell.exec('git clone git@github.com:juanmnl/react-starter.git ' + project);
  shell.exec('cd ' + project + ' && rm -rf .git TODO preview.png README.md');
  shell.echo('\n\033[34mAdding some fresh Git\033[0m');
  shell.exec('cd ' + project + ' && git init -q && touch README.md');
  shell.echo('\033[32mStructure created \033[0m');
}

function reactNoCss ( project ) {
  shell.exec('git clone -b no-css-framework git@github.com:juanmnl/react-starter.git ' + project);
  shell.exec('cd ' + project + ' && rm -rf .git TODO preview.png README.md');
  shell.echo('\n\033[34mAdding some fresh Git\033[0m');
  shell.exec('cd ' + project + ' && git init -q && touch README.md');
  shell.echo('\033[32mStructure created \033[0m');
}
