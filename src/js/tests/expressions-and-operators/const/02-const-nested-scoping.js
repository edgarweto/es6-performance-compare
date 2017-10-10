export const test = {
  title: 'const: nested scoping',
  refs: [],

  first: function () {
    var x = 1;
    if (true) {
      (function () {
        var x = 2;
        if (true) {
          (function () {
            var x = 3;
            if (true) {
              (function () {
                var x = 4;
              }());
            }
          }());
        }
      }());
    }
  },
  second: function () {
    const x = 1;
    if (true) {
      const x = 2;
      if (true) {
        const x = 3;
        if (true) {
          const x = 4;
        }
      }
    }
  }

};