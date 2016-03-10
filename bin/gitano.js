#!/usr/bin/env node
'use-strict';

var shell = require('shelljs');
var inquirer = require('inquirer');
var chalk = require('chalk');
var questions = require('./questions.js');

/**
* GITANO
*/

// Why so many setTimeout(s)? -> Because "Perception" matters

var echo = shell.echo;
var exec = shell.exec;

echo(chalk.bgBlack.bold('\nHello! Me llaman "El Gitano" –¡Olé!-'));
echo('I\'ll help you setup your React project.\n');
// Build a function that checks
// and downloads updates with this messages as loading state
setTimeout( function () {
  echo(chalk.blue.bgBlack.bold('Look deep into the crystal ball.'));
}, 1600);
setTimeout( function () {
  echo(chalk.blue.bgBlack.bold('Summoning the ancient binary Spirits...\n'));
}, 2400);


setTimeout( function () {
  inquirer.prompt( questions, function( answers ) {

    setTimeout( function () {
      echo(chalk.blue.bgBlack.bold('\nYou have chosen... Wisely.'));
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

// Clone react-starter Bulma Css
function reactBulma ( project ) {
  exec('git clone -b bulma git@github.com:juanmnl/react-starter.git ' + project);
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

  echo(chalk.blue.bgBlack.bold('Invoking the soul of ' + project));
  // Check if `project`folder doesn't exists or break w/ message
  // Add project type & css
  if (answers.Type === 'react-starter' && answers.Css === 'bootstrap') {
    reactBootstrap( project );
  } else if (answers.Type === 'react-starter' && answers.Css === 'bulma') {
    reactBulma( project );
  } else if (answers.Type === 'react-starter' && answers.Css === 'none') {
    reactNoCss( project );
  }
}

// Remove unnecesary files from project
function cleanProject ( project ) {
  exec('cd ' + project + ' && rm -rf .git TODO previews README.md');
  echo(chalk.blue.bgBlack.bold('Removing the Git of past lives...'));
  exec('cd ' + project + ' && git init -q && touch README.md');
  echo(chalk.blue.bgBlack.bold('The Spirits have spoken!'));
}

// Finishing messages
function finishProject ( answers ) {
  var project = answers.Name;
  echo(chalk.green.bgBlack.bold('Your wishes have been granted.'));
  setTimeout( function () {
    echo(chalk.blue.bgBlack.bold('Come back soon! And bring me some fresh blood :D'));
  }, 800);
  setTimeout( function () {
    echo(chalk.red.bold('\n`cd ' + project + '` and `npm install`\n'));
    echo(chalk.white.bgBlack.bold('–– { Build something awesome! } ––'))
  }, 1200);
}
