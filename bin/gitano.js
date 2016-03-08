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
  echo('\033[34mLook deep into the crystal ball. \033[0m');
}, 1600);
setTimeout( function () {
  echo('\033[34mSummoning the ancient binary Spirits...\033[0m\n');
}, 2400);


setTimeout( function () {
  inquirer.prompt( questions, function( answers ) {

    setTimeout( function () {
      echo('\n\033[34mYou have chosen... Wisely. \033[0m');
      // add random generated "cheerful" message
    }, 700);

    setTimeout( function () {
      // Create Project
      createProject( answers );
    }, 2000);

    setTimeout( function () {
      finishProject( answers );
    }, 3000);

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

  echo('Invoking the soul of ' + project);
  // Check if `project`folder doesn't exists or break w/ message
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
  echo('\n\033[34mRemoving the Git of past lives...\033[0m');
  exec('cd ' + project + ' && git init -q && touch README.md');
  echo('\033[34mThe Spirits have spoken!\033[0m');
}

function finishProject ( answers ) {
  var project = answers.Name;
  echo('\033[32mYour wishes will be granted.\033[0m');
  setTimeout( function () {
    echo('\n\033[34mCome back soon! And bring me some fresh blood :D\033[0m');
  }, 800);
  setTimeout( function () {
    echo('\n`cd ' +project + '` and `npm install`\n\033[34m–– { Build something awesome! } ––\033[0m');
  }, 1200);
}
