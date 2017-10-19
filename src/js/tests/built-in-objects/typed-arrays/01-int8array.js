export const test = {
  meta: {
    title: 'Typed Arrays: Int8Array',
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
  },
  second: function () {
    var int8 = new Int8Array(100);
  }

};