export let test = {
  name: 'const vs var',
  fName: 'var',
  sName: 'const',

  value: 0,
  first: function () {
    var x = 5;
    if (x) {
      this.value++;
    }
  },
  second: function () {
    const x = 5;
    if (x) {
      this.value++;
    }
  }
};