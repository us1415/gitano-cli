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
    name: 'Type',
    message: 'What type of project do you need? (more options soon)\n',
    choices: [
      'React-Starter'
    ],
    filter: function( val ) { return val.toLowerCase(); }
  },
  {
    type: 'list',
    name: 'Css',
    message: 'Do you want a CSS Framework with that?\n',
    choices: [ 'Bootstrap', 'None' ],
    filter: function( val ) { return val.toLowerCase(); }
  },
  // {
  //   type: 'list',
  //   name: 'Test',
  //   message: 'Do you write tests?\n',
  //   choices: [ 'Mocha/Chai', 'Enzyme', 'No thanks, I\'m living on the edge!' ],
  //   filter: function( val ) { return val.toLowerCase(); }
  // }
];

module.exports = questions;
