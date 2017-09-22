export const test = {
  title: 'var vs const',
  code1:   
`
var a = 5,
  b = 'hello',
  c = [0, 1, 2, 3, 4],
  d = {a: 0, b: 1, c: 2};
  for (int i = 0;;) {
    let x = 0;
  }`,

  code2:
`
const a = 5,
  b = 'hello',
  c = [0, 1, 2, 3, 4],
  d = {a: 0, b: 1, c: 2};
  for (int i = 0;;) {
    let x = 0;
  }`

};