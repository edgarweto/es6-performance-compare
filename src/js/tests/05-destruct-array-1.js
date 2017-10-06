export const test = {
  title: 'Destructuring arrays I',
  
  first: function () {
    var u = [0, 1, 2, 3, 4],
      a = u[0],
      b = u[1];

    u[2] = a + b;
  },
  second: function () {
     var u = [0, 1, 2, 3, 4],
      [a, b] = u;

    u[2] = a + b;
  }

};