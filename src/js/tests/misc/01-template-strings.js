export const test = {
  meta: {
    title: 'Template strings',
    parent: 'Misc',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
    }, {
      name: 'hacks.mozilla',
      url: 'https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/'
    }]
  },

  first: function () {
    var a = 'one',
      b = a + 'two',
      c = b + 'three',
      d = a + b + c + 'four';
  },
  second: function () {
    var a = 'one',
      b = `${a}two`,
      c = `${b}three`,
      d = `${a}${b}${c}four`;
  }

};