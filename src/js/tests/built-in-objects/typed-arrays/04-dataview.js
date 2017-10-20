export const test = {
  meta: {
    title: 'Typed Arrays: DataView',
    parent: 'Built-in objects',
    refs: [{
      name: 'DataView',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView'
    }, {
      name: 'TypedArray',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray'
    }]
  },

  first: function () {
    var N = 0x10;
    var arr = new Array(N);
    for(var i = 0; i < N; ++i) {
       arr[i] = {
          userId: 999,//0 to 20000 => 2 bytes
          priority: 8,//0 to 40 => 1 byte
          sex: 1,//0 or 1 => 1 byte
       };
    }
  },
  second: function () {
    var N = 0x10;
    var BYTE_PER_OBJECT = 4;
    var buffer = new ArrayBuffer(N * BYTE_PER_OBJECT);
    var view = new DataView(buffer);
    for(var i = 0; i < N; ++i) {
       view.setInt16(i * BYTE_PER_OBJECT, 999);
       view.setInt8(i * BYTE_PER_OBJECT + 2, 8);
       view.setInt8(i * BYTE_PER_OBJECT + 3, 1);
    }
  }

};