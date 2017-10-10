export const test = {
  title: 'Rest in Object Destructuring',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Rest_in_Object_Destructuring'
  }],
  
  first: function () {
    let x = {a: 10, b: 20, c: 30, d: 40};
    let a = x.length > 0 ? x[0] : undefined,
      b = x.length > 1 ? x[1] : undefined,
      rest = x.length > 2 ? x.slice(2) : [];
  },
  second: function () {
    let x = {a: 10, b: 20, c: 30, d: 40};
    let {a, b, ...rest} = x;
  }

};