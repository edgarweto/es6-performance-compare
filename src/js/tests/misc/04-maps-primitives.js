export const test = {
  meta: {
    title: 'Maps: map of primitives',
    parent: 'Misc',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map'
    }]
  },

  first: function () {
    var map = {};

    for (var i = 0; i < 50; i++) {
      map[i] = i;
      map[i];
    }
  },
  second: function () {
    var map = new Map();

    for (var i = 0; i < 50; i++) {
      map.set(i, i);
      map.get(i);
    }
  }

};