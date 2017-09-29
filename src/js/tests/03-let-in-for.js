export const test = {
  title: 'let in for',
  nLoopRepetitions: 99,
  code1:   
`
let i = 0;
for (i; i < 99; i++) {
  this.value++;
}`,

  code2:
`

for (let i = 0; i < 99; i++) {
  this.value++;
}`,

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