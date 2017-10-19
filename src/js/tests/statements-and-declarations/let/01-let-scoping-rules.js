export const test = {
  meta: {
    title: 'let: scoping rules',
    parent: 'Statements and declarations',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Scoping_rules_2'
    }]
  },

  first: function () {
    var x = 1;
    if (true) {
      (function () {
        var x = 2;
      }());
    }
  },
  second: function () {
    let x = 1;
    if (true) {
      let x = 2;
    }
  }

};