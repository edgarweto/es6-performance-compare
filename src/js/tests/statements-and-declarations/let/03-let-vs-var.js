export const test = {
  meta: {
    title: 'let: let vs var',
    parent: 'Statements and declarations',
    refs: []
  },

  first: function () {
    var a = 1;
    if (true) {
      var b = 2;
      if (true) {
        var c = 3;
        if (true) {
          var d = 4;
        }
      }
    }
  },
  second: function () {
    let a = 1;
    if (true) {
      let b = 2;
      if (true) {
        let c = 3;
        if (true) {
          let d = 4;
        }
      }
    }
  }
};