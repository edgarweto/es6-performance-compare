export const test = {
  meta: {
    title: 'Template strings',
    parent: 'Expressions and operators',
    refs: []
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