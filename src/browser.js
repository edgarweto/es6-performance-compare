let tests = [{
  name: 'const vs var',
  fName: 'var',
  sName: 'const',

  first: function () {
    var a = 5,
      b = 'hello',
      c = [0, 1, 2, 3, 4],
      d = {a: 0, b: 1, c: 2};
  },
  second: function () {
    const a = 5,
      b = 'hello',
      c = [0, 1, 2, 3, 4],
      d = {a: 0, b: 1, c: 2};
  }
}, {
  name: 'let vs var',
  fName: 'var',
  sName: 'let',

  first: function () {
    const a = 5,
      b = 'hello',
      c = [0, 1, 2, 3, 4],
      d = {a: 0, b: 1, c: 2};
  },
  second: function () {
    let a = 5,
      b = 'hello',
      c = [0, 1, 2, 3, 4],
      d = {a: 0, b: 1, c: 2};
  }
}, {
  name: 'let in for',
  fName: 'let out of for',
  sName: 'let inside for',

  value: 0,
  first: function (nLoopRepetitions) {
    let i = 0;
    for (i; i < nLoopRepetitions; i++) {
      this.value++;
    }
  },
  second: function (nLoopRepetitions) {
    for (let i = 0; i < nLoopRepetitions; i++) {
      this.value++;
    }
  }
}, {
  name: 'template strings',
  fName: 'addition',
  sName: 'template',

  value: 0,
  first: function () {  
    var a = 'one',
      b = a + 'two',
      c = b + 'three',
      d = a + b + c + 'four';
  
  },
  second: function () {    
    var a = 'one',
      b = `${a}two`,
      c = `${b}three`,
      d = `{a+b+c}four`;
  }
}, {
  name: 'destructuring arrays 1',
  fName: 'array',
  sName: 'destructuring [_,_]',

  value: 0,
  first: function () {
    var u = [0, 1, 2, 3, 4],
      a = u[0],
      b = u[1];

    u[2] = a + b;
  },
  second: function () {
    var u = [0, 1, 2, 3, 4],
      [a, b] = u;

    u[2] = a + b;
  }
}, {
  name: 'destructuring arrays 1.1',
  fName: 'array',
  sName: 'destructuring [_,_,_,_,_]',

  value: 0,
  first: function () {
    var u = [0, 1, 2, 3, 4],
      a = u[0],
      b = u[1],
      c = u[2],
      d = u[3],
      e = u[4];
  },
  second: function () {
    var u = [0, 1, 2, 3, 4],
      [a, b, c, d, e] = u;
  }
}, {
  name: 'destructuring arrays 2',
  fName: 'array',
  sName: 'destructuring [_, ,_]',

  value: 0,
  first: function () {
    var u = [0, 1, 2, 3, 4],
      a = u[0],
      b = u[2];

    u[2] = a + b;
  },
  second: function () {
    var u = [0, 1, 2, 3, 4],
      [a, ,b] = u;

    u[2] = a + b;
  }
}, {
  name: 'destructuring arrays 3',
  fName: 'array',
  sName: 'destructuring [_, ,_,...]',

  value: 0,
  first: function () {
    var u = [0, 1, 2, 3, 4],
      a = u[0],
      b = u[2];

    u[2] = a + b;
  },
  second: function () {
    var u = [0, 1, 2, 3, 4],
      [a, ,b,...rest] = u;

    u[2] = a + b;
  }
}, {
  name: 'destructuring arrays 4',
  fName: 'destructuring var [_, ,_,...]',
  sName: 'destructuring let [_, ,_,...]',

  value: 0,
  first: function () {
    var u = [0, 1, 2, 3, 4],
      [a, ,b,...rest] = u;

    u[2] = a + b;
  },
  second: function () {
    var u = [0, 1, 2, 3, 4];
    let [a, ,b,...rest] = u;

    u[2] = a + b;
  }
}, {
  name: 'destructuring objects 1',
  fName: 'object',
  sName: 'destructuring {_,_}',

  value: 0,
  first: function () {
    var u = {a: 1, b: 2},
      a = u.a,
      b = u.b;
  },
  second: function () {
    var u = {a: 1, b: 2},
      {a, b} = u;
  }
}];

/**
 **********************************************************************
 */
(function (tests) {
  const N_REPETITIONS = 1000000,
    N_INTERNAL_LOOP_REPS = 499;

  function runPerformanceTest(test) {
    console.log(`Start test: ${test.name}`);

    
    let res1 = runFunctionTest(test.fName, N_REPETITIONS, N_INTERNAL_LOOP_REPS, test.first.bind(test));
    let res2 = runFunctionTest(test.sName, N_REPETITIONS, N_INTERNAL_LOOP_REPS, test.second.bind(test));

    let styleFast = "color: green;font-weight:bold;",
      styleSlow = "color: red;font-weight:bold;";

    let style1 = "",
      style2 = "";

    if (res1.diff === res2.diff) {

    } else if (res1.diff < res2.diff) {
      style1 = styleFast;
      style2 = styleSlow;
    } else {
      style2 = styleFast;
      style1 = styleSlow;
    }

    console.log("%c%s", style1, `${test.fName}: ${res1.diff} | av/loop: ${res1.avMsPerLoop} `);
    console.log("%c%s", style2, `${test.sName}: ${res2.diff} | av/loop: ${res2.avMsPerLoop} `);

    console.log('');
  }

  function runFunctionTest(testName, nRepetitions, nLoopRepetitions, func) {
    let sttTime = (new Date()).getTime();
    for (let i = 0; i < nRepetitions; i++) {
      func(nLoopRepetitions);
    }
    let endTime = (new Date()).getTime();

    return {
      diff: endTime - sttTime,
      avMsPerLoop: (endTime - sttTime) / nRepetitions
    };
  }

  tests.map(runPerformanceTest);
})(tests);