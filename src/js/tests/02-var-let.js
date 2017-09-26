export const test = {
  title: 'var vs let',
  code1: "old",
  code2: "new",

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