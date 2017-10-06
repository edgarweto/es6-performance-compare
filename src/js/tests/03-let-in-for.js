export const test = {
  title: 'let in for',
  nLoopRepetitions: 99,

  value: 0,
  first: function () {
    let i = 0;
    for (i; i < this.nLoopRepetitions; i++) {
      this.value++;
    }
  },
  second: function () {
    for (let i = 0; i < this.nLoopRepetitions; i++) {
      this.value++;
    }
  }

};