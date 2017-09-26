export const test = {
  title: 'var vs const',
  code1:   
`
var a = 5,
  b = 'hello',
  c = [0, 1, 2, 3, 4],
  d = {a: 0, b: 1, c: 2};`,

  code2:
`
const a = 5,
  b = 'hello',
  c = [0, 1, 2, 3, 4],
  d = {a: 0, b: 1, c: 2};`,

  first: function () {
    var a = 5,
      b = 'hello',
      c = [0, 1, 2, 3, 4],
      d = {a: 0, b: 1, c: 2};
  },
  second: function () {
    const a = 5,
      b = 'hello',
      c = [0, 1, 2, 3, 4],
      d = {a: 0, b: 1, c: 2};
  }

};