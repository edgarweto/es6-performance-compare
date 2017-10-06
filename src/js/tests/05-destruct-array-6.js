export const test = {
  title: 'Destructuring arrays VI - Swap variables',
  
  first: function () {
    var a = 1,
      b = 3,
      t;

    t = a;
    a = b;
    b = t;
  },
  second: function () {
    var a = 1,
      b = 3;

    [a, b] = [b, a];
  }

};