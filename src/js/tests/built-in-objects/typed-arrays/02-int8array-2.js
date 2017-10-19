export const test = {
  meta: {
    title: 'Typed Arrays: Int8Array II',
    parent: 'Built-in objects',
    refs: [{
      name: 'Int8Array',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array'
    }, {
      name: 'TypedArray',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray'
    }]
  },

  first: function () {
    var int8 = new Array(100);
    for (var i = 0; i < 100; i++) {
      int8[i] = i;
    }
  },
  second: function () {
    var buffer = new ArrayBuffer(100 * 1);
    var int8 = new Int8Array(buffer);
    for (var i = 0; i < 100; i++) {
      int8[i] = i;
    }
  }

};