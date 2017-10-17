export const test = {
  meta: {
    title: 'For of iteration and destructuring',
    parent: 'Expressions and operators',
    refs: [{
      name: 'developer.mozilla',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#For_of_iteration_and_destructuring'
    }]
  },
  
  first: function () {
    var people = [{
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    }, {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }];

    for (var i = 0, n = people.length; i < n; i++) {
      var p = people[i],
        n = p.name,
        f = p.family && p.family.father;
    }
  },
  second: function () {
    var people = [{
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    }, {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }];

    for (var {name: n, family: {father: f}} of people) {
    }
  }

};