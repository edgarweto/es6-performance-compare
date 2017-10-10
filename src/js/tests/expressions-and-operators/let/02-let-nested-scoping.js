export const test = {
  title: 'let: nested scoping',
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
    let x = 1;
    if (true) {
      let x = 2;
      if (true) {
        let x = 3;
        if (true) {
          let x = 4;
        }
      }
    }
  }

};