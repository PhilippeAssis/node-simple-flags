var flags = require('./lib/simpleFlags')

// Default options
var options = {
  'args': ['author', 'website'],
  'coffee': false,
  'not': true,
  'developer': null,
  'country': {
    aliases: ['c'],
    default: "Do not be 'reaça'"
  }
}

console.log('Default options:')
console.log(options)

console.log('\nYou used: \n' + process.argv.slice(2).map(function (value) {
  return (value.search(/ /g) > -1) ? '"' + value + '"' : value
}).join(' ') + '\n')

console.log('Result:')
console.log(flags(options))
