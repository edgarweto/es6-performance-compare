export const test = {
  title: 'Computed object property names and destructuring',
  refs: [{
    name: 'developer.mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Computed_object_property_names_and_destructuring'
  }],
  
  first: function () {
    let key = 'z', x = {z: 'bar'};

    let foo = x.hasOwnProperty(key) ? x[key] : undefined;
  },
  second: function () {
    let key = 'z';
    let {[key]: foo} = {z: 'bar'};
  }

};