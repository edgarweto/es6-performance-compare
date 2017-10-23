export const test = {
  meta: {
    title: 'Template strings: tags',
    parent: 'Misc',
    refs: [{
      name: '',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
    }, {
      name: 'hacks.mozilla',
      url: 'https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/'
    }]
  },

  first: function () {
    function _tr(amount, str1, str2, currency) {
      return str1 + amount + currency + str2;
    }
    var s = _tr(19.45, "The prize ", " is for you!", '$');
  },
  second: function () {
    function _tr(strings, amount, currency) {
      return strings[0] + amount + currency + strings[2]; 
    }
    var amount = 19.45,
      currency = '$',
      str = _tr`The prize ${amount}${currency} is for you`;
  }

};