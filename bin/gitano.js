#!/usr/bin/env node
'use-strict';

var shell = require('shelljs');
var inquirer = require('inquirer');
var questions = require('./questions.js');

////* GITANO *////

// Why so many setTimeout(s)? -> Because "Perception" matters

var echo = shell.echo;
var exec = shell.exec;

echo('\nHello! Me llaman "El Gitano" –¡Olé!-\nI\'ll help you setup your React project.\n');
// Build a function that checks
// and downloads updates with this messages as loading state
setTimeout( function () {
  echo('\033[34mMixing some magic powders... \033[0m');
}, 1600);
setTimeout( function () {
  echo('\033[34mSummoning the ancient binary spirits...\033[0m\n');
}, 2400);


setTimeout( function () {
  inquirer.prompt( questions, function( answers ) {

    setTimeout( function () {
      echo('\n\033[34mThe spirits are with you! \033[0m');
      // add random generated "cheerful" message
    }, 700);

    setTimeout( function () {
      // Create Project
      createProject( answers );
    }, 2000);

    setTimeout( function () {
      finishProject();
    }, 2700);

  });
}, 3500);


// Clone react-starter default
function reactBootstrap ( project ) {
  exec('git clone git@github.com:juanmnl/react-starter.git ' + project);
  cleanProject( project );
}

// Clone react-starter no-css-framework branch
function reactNoCss ( project ) {
  exec('git clone -b no-css-framework git@github.com:juanmnl/react-starter.git ' + project);
  cleanProject( project );
}

// Create the project based on the answers
function createProject ( answers ) {
  var project = answers.Name;

  echo('Summoning ' + project + ':');
  // Add project type & css
  if (answers.Type === 'react-starter' && answers.Css === 'bootstrap') {
    reactBootstrap( project );
  } else if (answers.Type === 'react-starter' && answers.Css === 'none') {
    reactNoCss( project );
  }
}

// Remove unnecesary files from project
function cleanProject ( project ) {
  exec('cd ' + project + ' && rm -rf .git TODO previews README.md');
  echo('\n\033[34mAdding some fresh Git\033[0m');
  exec('cd ' + project + ' && git init -q && touch README.md');
  echo('\033[34mMixing everything...\033[0m');
}

function finishProject () {
  echo('\033[32mYour potion is ready!\033[0m');
  echo('\n\033[34mCome back soon! And bring me some fresh blood :D\033[0m');
  echo('\ncd into your project and build awesome stuff');
}
