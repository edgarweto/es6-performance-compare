export const test = {
  title: 'Template strings',

  
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