export const test = {
  meta: {
    title: 'Sets',
    parent: 'Misc',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set'
    }]
  },

  first: function () {
    var _pairsSet = {},
      _objKeyIdx = 0;
    function addToSet(obj) {
      obj._key = '_k' + _objKeyIdx;
      _pairsSet[obj._key] = obj;
    }
    function setHas(obj) {
      return _pairsSet[obj._key] !== undefined;
    }

    addToSet({a:0, b: 1})
    var x = {a:0, b: 1};
    addToSet(x);
    x.a = 1;
    setHas(x);

  },
  second: function () {
    var pairsSet = new Set();
    pairsSet.add({a:0, b: 1});
    var x = {a:0, b: 1};
    pairsSet.add(x);
    x.a = 1;
    pairsSet.has(x);
  }

};