

(function () {
  const test = {
    first: function () {
      var u = {a: 1, b: 2},
        a = u.a,
        b = u.b;
    },
    second: function () {
      var u = {a: 1, b: 2},
        {a, b} = u;
    }
  };

  var fTestDouble = function (f1, f2, nInnerRepetitions, nRepetitions) {
    let i, j,
      d1 = 0,
      d2 = 0;

    for (i = 0; i < nRepetitions; i++) {

      for (j = 0; j < nInnerRepetitions; j++) {
        d1 += fTestSingle('test1', f1, nInnerRepetitions);
      }
      for (j = 0; j < nInnerRepetitions; j++) {
        d2 += fTestSingle('test2', f2, nInnerRepetitions);
      }
    }

    const avDuration1 = d1 / (nInnerRepetitions * nRepetitions),
      avDuration2 = d2 / (nInnerRepetitions * nRepetitions);

    return {
      avDuration1: avDuration1 * 1000,
      avDuration2: avDuration2 * 1000
    };
  };

  var fTestSingle = function (testName, f1, nRepetitions) {
    performance.mark(`${testName}-start`);
  
    let i = 0;
    for (; i < nRepetitions; i++) {
      f1();
    }

    performance.mark(`${testName}-end`);
    performance.measure(testName, `${testName}-start`, `${testName}-end`);
    let measures = performance.getEntriesByName(testName);

    performance.clearMarks();
    performance.clearMeasures();

    return measures[0].duration;
  };


  const N_LOOP_REPETITIONS = 800;
  const N_INNER_REPETITIONS = 200;



  const res = fTestDouble(test.first, test.second, N_INNER_REPETITIONS, N_LOOP_REPETITIONS);

  console.log("Double test:", res.avDuration1, res.avDuration2);

})();


if(false) {


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

  first: function () {
    var u = {a: 1, b: 2},
      a = u.a,
      b = u.b;
  },
  second: function () {
    var u = {a: 1, b: 2},
      {a, b} = u;
  }
}, {
  name: 'creating objects 1',
  fName: 'object {a:a}',
  sName: 'object {a}',

  first: function () {
    var a = 1, b = 2, c = 3,
      o = {a: a, b: b, c: c};
  },
  second: function () {
    var a = 1, b = 2, c = 3,
      o = {a, b, c};
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

    console.log(res1, res2);

    let diff1 = res1.measures[0].duration,
      diff2 = res2.measures[0].duration;

    let styleFast = "color: green;font-weight:bold;",
      styleSlow = "color: red;font-weight:bold;";

    let style1 = "",
      style2 = "";

    if (diff1 === diff2) {

    } else if (diff1 < diff2) {
      style1 = styleFast;
      style2 = styleSlow;
    } else {
      style2 = styleFast;
      style1 = styleSlow;
    }

    console.log("%c%s", style1, `${test.fName}: ${diff1} | av/loop: ${res1.avMsPerLoop} `);
    console.log("%c%s", style2, `${test.sName}: ${diff2} | av/loop: ${res2.avMsPerLoop} `);

    console.log('');
  }

  function runFunctionTest(testName, nRepetitions, nLoopRepetitions, func) {
    performance.mark(`${testName}-start`);
    for (let i = 0; i < nRepetitions; i++) {
      func(nLoopRepetitions);
    }
    performance.mark(`${testName}-end`);

    performance.measure(testName, `${testName}-start`, `${testName}-end`);
    let measures = performance.getEntriesByName(testName);

    performance.clearMarks();
    performance.clearMeasures();

    return {
      measures
    };
  }

  tests.map(runPerformanceTest);
})(tests);



}