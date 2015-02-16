'use strict';

module.exports = {
  handler: function(request, reply) {
    var numbers = request.params.string.split(',');
    numbers = numbers.map(function(n) { return n * 1; });
    console.log(numbers);
    reply.view('templates/math/squares', {numbers: numbers});
  }
};
