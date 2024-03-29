var questions = [
  {
    type: 'input',
    name: 'Name',
    message: 'What\'s your project name?\n',
    default: 'hola-mundo',
    filter: function( val ) { return val.toLowerCase(); },
    validate: function( value ) {
      var regexp = /^\S*$/;
      var pass = value.match( regexp );
      if ( pass ) {
        return true;
      } else {
        return "Please enter a name without spaces";
      }
    }
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
    choices: [ 'Bootstrap', 'Bulma', 'None' ],
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
