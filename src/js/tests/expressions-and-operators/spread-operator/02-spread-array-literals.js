export const test = {
  title: 'Spread op: array literals',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Spread_in_array_literals'
  }],
  
  first: function () {
    var parts = ['shoulders', 'knees']; 
    var lyrics = ['head', 'and', 'toes'];

    // Insert inside position
    for (var i = 0, n = parts.length; i < n; i++) {
      lyrics.splice(1 + i, 0, parts[i]);
    }
  },
  second: function () {
    var parts = ['shoulders', 'knees']; 
    var lyrics = ['head', ...parts, 'and', 'toes'];
  }

};