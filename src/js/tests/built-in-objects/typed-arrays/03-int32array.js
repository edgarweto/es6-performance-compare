export const test = {
  meta: {
    title: 'Typed Arrays: Int32Array',
    parent: 'Built-in objects',
    refs: [{
      name: 'Int32Array',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array'
    }, {
      name: 'TypedArray',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray'
    }]
  },

  first: function () {
    var N = 0x100;
    var arr = new Array(N);
    for(var i = 0; i < N; ++i) {
       arr[i] = (Math.random() * 0x100000000) | 0;
    }
  },
  second: function () {
    var N = 0x100;
    var buffer = new ArrayBuffer(N * 4);
    var Uint32 = new Uint32Array(buffer);
    for(var i = 0; i < N; ++i) {
       Uint32[i] = (Math.random() * 0x100000000) | 0;
    }
  }

};