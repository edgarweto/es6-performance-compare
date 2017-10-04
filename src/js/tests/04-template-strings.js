const a = '${a}',
  b = '${b}',
  x = '${a}${b}${c}';


export const test = {
  title: 'Template strings',
  nLoopRepetitions: 99,
  code1:   
`
var a = 'one',
  b = a + 'two',
  c = b + 'three',
  d = a + b + c + 'four';`,

  code2:
`
var a = 'one',
  b = '${a}two',
  c = '${b}three',
  d = '${x}four';`,

  value: 0,
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